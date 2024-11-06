const Post = require('../models/posts');

async function createPost(req,res) {
    try{
        const created = await Post.create(req.body)
        const saved = await created.save()
        
        if(saved){
            console.log('New post successfully created')
            res.status(200).json(saved)
        }
    }

    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports = createPost