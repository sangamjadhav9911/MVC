let Carts=require('../model/Cart')
let express=require('express')
let router=express.Router()
router.post('/',async(req,res)=>{
let userId="1";
let {productId,title,price,description,quantity,image}=req.body

let cart= new Carts({userId,items:[]})

cart.items.push({productId,title,price,description,quantity,image})
await cart.save()
res.json({message:"item added",success:true})

})
module.exports=router