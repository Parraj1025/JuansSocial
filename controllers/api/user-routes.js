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

router.post('/signup', async (req, res) => {
    try {
        console.log(req.body.username)
        const check = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        if (check) {

            const UserId = await User.findOne({where: {username : req.body.username}})
            

            await req.session.save()
            req.session.username = req.body.username,
                req.session.loggedIn = true,
                req.session.showLogOut = true,
                req.session.showLogIn = false,
                req.session.cookie

            res.json(req.session)
            res.render('all')
        }
        else {
            req.session.loggedIn = false
            res.json(req.session.loggedIn)
            res.render('signup')
        }


    }
    catch (err) {
        req.session.loggedIn = false
        req.session.userError = err.erros,
        res.status(400).json(req.session.loggedIn)
    }
})

router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(200).render('all')
            })}
          else{
            console.log('youre not logged in')
            res.status(400).render('login')
          }
        }
catch {
            res.status(400).render('all')
            console.log('server error')
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
        if (!thisYou) {
            res.status(404).json('wrong password')
        }

        await req.session.save();
        req.session.loggedIn = true;
        req.session.username = username;
        req.session.userId = user.dataValues.id
        req.session.cookie;

        res
            .status(200)
            .json(req.session)
    }


    catch (err) {
        alert('fill all fields')
    }
})

module.exports = router