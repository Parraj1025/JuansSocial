const User = require( "../models/user");

async function createUser(req,res){
    try{
        const create = await User.create(req.body);
        const savedUser = await create.save()
        if(savedUser){
            console.log('user has been created successfully')
            res.status(200).json(savedUser)
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports = createUser