const Post = require('../models/posts');

async function upvotes(req,res){
    const postId = req.params.postId;
    const userId = req.body.userId;
    try{
        const post = await Post.findById(postId);
        if(!post){
            res.status(404).json('post not found');
        }
        if( !post.meta || !post.meta.upvotes){
            post.meta = { upvotes:[] };
        };

        const upvotes = post.meta.upvotes;
        const isUpvoted = upvotes.includes(userId);

        if (isUpvoted){
            post.meta.upvotes.pull(userId);
        } else {
            post.meta.upvotes.push(userId);
        }

        await post.save(
            res.status(200).json('upvote updated')
        );
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function loadPosts(req,res){
    try{

        const posts =  
        await Post.find().sort({ createdAt: -1 });
        if(posts){
            res.status(200).json(posts);
        }
    }
    catch(err){
        res.status(401).json(err);
    }
}

async function deletePost(req,res){
    try{
        
        const toDelete = await Post.findByIdAndDelete(req.params.postId);
        if(toDelete){
            res.status(200).json('post deleted');
        } else {
            res.status(404).json('no such post');
        }
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function userPosts(req,res){
    try{
        const userPosts = await Post.find({username: req.params.username}).sort({createdAt: -1});
        if(userPosts){
            res.status(200).json(userPosts);
        }
    }
    catch(err){
        res.status(301).json(err);
    }
}

async function createPost(req,res) {
    try{
        const created = await Post.create(req.body);
        const saved = await created.save();
        
        if(saved){
            console.log('New post successfully created');
            res.status(200).json(saved);
        }
    }

    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

module.exports = {createPost, loadPosts, userPosts, deletePost , upvotes}