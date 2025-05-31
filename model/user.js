require('../dbconnect.js')
let mongoose = require('mongoose')


let userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:() => Date.now()},


})

let Users = new mongoose.model("users",userSchema)

module.exports = Users