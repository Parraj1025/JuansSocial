const { mongoose, Schema } = require( "mongoose");

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        username:{
            type: String,
            required: true
        },
        post:{
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        meta:{
            upvotes:{
                type:Number,
                default:0
        }
        }
    }
)

const Post = mongoose.model('post', postSchema);
module.exports = Post