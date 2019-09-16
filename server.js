const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname,'/node_modules')))
app.use(express.static(path.join(__dirname,'/dist')))


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/Weather-App", {useNewUrlParser: false}, ()=> {console.log("connected")})
app.use("/", api)





app.listen(4000, function(){
    console.log("Server up and running on port 4000")
})

