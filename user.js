const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  {
    name:String,
    email:String,
    city:String,
    phone:Number,
  }
)
module.exports = new mongoose.model('Employees',userSchema)