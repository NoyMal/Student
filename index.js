var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var studentController = require('./controller/studentController')
var authController = require(`./controller/authController`)
var app = express()

require("./configs/database")


app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/students',studentController)
app.use('/auth',authController)




app.listen(8000,()=>{
    console.log("The server is up");
})