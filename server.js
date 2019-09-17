const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, '/node_modules')))
app.use(express.static(path.join(__dirname, '/dist')))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Weather-App", { useNewUrlParser: false }, () => { console.log("connected") })
app.use("/", api)



const Port = 4000

app.listen(process.env.PORT || Port, function () {
    console.log("Server up and running on port 4000")
})

