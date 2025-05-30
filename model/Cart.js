
require('../dbconnect')
let mongoose=require('mongoose')

let cartproductschecma= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        require:true
    },
    title:{type:String,require:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    quantity:{type:Number,require:true},
    image:{type:String,require:true},
})


let cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        require:true
    },
    items:[cartproductschecma]

})
let cart = new mongoose.model("carts",cartSchema)

module.exports=cart