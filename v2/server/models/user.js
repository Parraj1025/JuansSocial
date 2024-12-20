const {mongoose, Schema }= require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstName:{
            type: String
        },
        lastName:{
            type: String
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            required: true,
            type: String
        },
        posts: {
            type:[{ type: Schema.Types.ObjectId, ref: 'post'}],
            default:[]
        }
    })

userSchema.pre('save', async function (userData) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,10);
    }

    userData();

});

const User = mongoose.model('user',userSchema);

module.exports = User