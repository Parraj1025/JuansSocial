const router = require('express').Router();
require('dotenv').config();
const Sequelize = require('./config/connection');
const express = require('express');
const session = require('express-session')

const routes = require('./controllers');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

const sess = {
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:false
}

app.use(session(sess))

// app.use(session(sess))
app.use(router)
app.use(routes)
app.use(express.urlencoded({ extended: true }))
app.use(express.json)



Sequelize.sync({force: true}).then(()=>{
    app.listen(3000)
})
