const mongoose = require('mongoose')
const Schema = mongoose.Schema


const weatherSchema = new Schema({
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition:String,
    conditionPic: String
})


const City = mongoose.model('City', weatherSchema)

module.exports = City