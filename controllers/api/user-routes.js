const Post = require('../../models/posts')
const User = require('../../models/user')
const express = require('express')
const router = express.Router()
router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const check = await User.findAll({
            include: [{
                model: Post
            }]
        })
        res.json(check)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body.username)
        const check = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json(check)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {

        //get user Data
        const { username, password } = req.body
        const user = await User.findOne({
            where: { username }
        })

        if (!user) return res.status(404).json(`user ${username} not found`)

        // authenticate
        const thisYou = await User.login(password, user.password);
        if (thisYou){
            res.status(200).json(`welcome back ${username}`)
        }
        else{res.status(404).json('wrong password') }


    }


    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router