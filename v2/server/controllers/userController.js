const User = require( "../models/user");
const jwt = require('jsonwebtoken')
const key = process.env.SECRETKEY

async function getUserID(req,res){
    try{
        const userId = await User.find({username: req.params.username})
        res.status(200).json({
            userID: userId[0].id,
            username: userId[0].username

        })
    }
    catch(err){
        console.log(err)
    }
}


async function createUser(req,res){
    try{
        const create = await User.create(req.body);
        const savedUser = await create.save()
        if(savedUser){
            console.log('user has been created successfully')
            res.status(200).json(savedUser)
        }
        else{
            res.status(401).json(savedUser)
        }
    
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function checkExisting(req,res){
    try{
        const existingUser = await User.find({email: req.body.email});
        if(existingUser[0]){
            const token = jwt.sign({
                username: existingUser[0].username,
                name: existingUser[0].firstName,
                userId: existingUser[0].id
            },
            key)
            res.status(200).json(token)
        }
        else{
            res.status(401).json(req.body.email)
        }
       
    }
    catch (err) {
        res.status(401).json(err)
    }
}

module.exports = { createUser, checkExisting, getUserID}