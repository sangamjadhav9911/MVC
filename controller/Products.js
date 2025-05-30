let products = require('../model/Products.js')

let allproduct=async(req,res)=>{
    let data = await products.find()

    res.json(data)
    // console.log(data)
}
module.exports={
    allproduct,
}