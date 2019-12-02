const express = require('express')
const router = express.Router()
const request = require('request')
const City = require('../model/City')

const apiKey = "4bd20a8118ac3089bc546d81428013a1"



router.get('/city/:cityName', function (req, res) {
  let cityName = req.params.cityName

  request(`http://api.weatherstack.com/current?access_key=4bd20a8118ac3089bc546d81428013a1&query=${cityName}`, function (err, response, body) {

    let reqBody = JSON.parse(body)
    // console.log(reqBody)

    let climate = {
      name: reqBody.location.name,
      temperature: reqBody.current.temperature,
      condition: reqBody.current.weather_descriptions[0],
      conditionPic: reqBody.current.weather_icons[0]
    }
    res.send(climate)
  })
})


router.get('/cities', function (req, res) {
  City.find({}).exec(function (err, city) {
    res.send(city)

  })
})


router.post('/city', function (req, res) {
  let climate = new City (req.body)
  
  climate.save().then(function (doc) {
    res.send(`City save on the DB ${doc}`)
  })
})

router.delete('/city/:cityName', function (req, res) {
  let cityName = req.params.cityName

  City.findOneAndRemove({
    name: cityName
  }).then(res.send("deleted"))
})

module.exports = router