const User = require('../models/user')

async function signIn(req,res){
    try{
        console.log(req.body)
        res.status(200).json(req.body)
    }
    catch(err){

    }
}

module.exports = signIn

