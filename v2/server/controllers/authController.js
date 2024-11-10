const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



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
                    name: existingUser[0].firstName
                }, key
                )
                res.cookie('jwt', token ,{httpOnly: false})
                res.status(200).json(token)
            }
            else {
                res.status(401).json('Invalid Credentials')
            }
        }
        else{
            res.status(404).json('User not found')
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json('server error')
    }
}

module.exports = signIn

