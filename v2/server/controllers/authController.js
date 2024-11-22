const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const key = process.env.SECRETKEY



async function signIn(req, res) {
    try {
        const existingUser = await User.find({ username: req.body.username });
        if (existingUser[0]) {
            const key = process.env.SECRETKEY
            const encryptedPass = await existingUser[0].password

            const matchingPassword = await bcrypt.compare(req.body.password, encryptedPass)
            if (matchingPassword) {
                const token = jwt.sign({
                    username: existingUser[0].username,
                    name: existingUser[0].firstName,
                    userId: existingUser[0].userId
                },
                    key,
                    { expiresIn: 60000 }
                )
                res.cookie('jwt', token, { httpOnly: false },)
                res.status(200).json(token)
            }
            else {
                res.status(401).json('Invalid Credentials')
            }
        }
        else {
            res.status(404).json('User not found')
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json('server error')
    }
}

async function authenticate(req, res) {
    const  token = req.body.token
    if (!token) {
      return res.status(401).json('Unauthorized: No token provided');
    }
  
    try {
      const decoded = jwt.verify(token, process.env.SECRETKEY); // Assuming secretKey is a secure secret
      res.status(200).json({
        username: decoded.username,
        firstName: decoded.name,
        userId: decoded.userId

      });
    } catch (error) {
      console.error('Authentication error:', error);
      res.status(401).json('Invalid or expired token');
    }

  }
    module.exports = { signIn, authenticate }

