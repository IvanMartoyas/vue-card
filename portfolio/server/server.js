const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./router')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')


/*
    body-parser РАБОТАЕТ 
    РЕШИТЬ ВОПРОС С CORS : вопрос решон
    подключение к монго...

    БД 
    -------------------------------------
    user data base
    name    IVANMART
    password IVANMART2020 
    bd name portfolio
*/

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(router)

var db;
async function  start() {
 
    try {

        mongoose.connect("mongodb+srv://IVANMART:IVANMART2020@cluster0.tagdj.mongodb.net/portfolio?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("BD has been started....")

        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use(morgan('dev'));

        app.listen( PORT, () => {// после подключения начинаем слушать port 
            console.log("server has been started....")
        })
    
    }
    catch(e) {
        console.log("Error "+ e)
    }

}

start()