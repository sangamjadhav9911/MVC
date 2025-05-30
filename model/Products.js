let mongoose = require('mongoose')
require('../dbconnect.js')

let productSchema =mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    brand: String,

    category: String,

    price: Number,
    rating: Number,
    stock: Number,
    image: String,
    date: {
        type:Date,
        default:Date.now
    }



});
let productmodel= new mongoose.model("products", productSchema);
module.exports=productmodel;