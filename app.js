const router = require('express').Router();
require('dotenv').config();
const Sequelize = require('./config/connection');
const express = require('express');

const routes = require('./controllers');
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(router)
app.use(routes)
app.use(express.urlencoded({ extended: true }))
app.use(express.json)
app.use(express.static('./public'))


Sequelize.sync({force: false}).then(()=>{
    app.listen(3000)
})
