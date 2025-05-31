let Products = require('../model/Products.js')

let allproduct=async(req,res)=>{
    let data = await Products.find()

    res.json(data)
    // console.log(data)
}
let singleproduct=async (req, res) => {
  let id = req.params.id
  let data = await Products.find({id:+id})
  res.json(data)
}
let deleteproduct=async (req, res) => {
  let id = req.params.id

  let data = await Products.deleteOne({id:+id})
  res.json('data deleted')
}
let updateproduct= async (req, res) => {
  let id = req.params.id
  let prod = req.body
  console.log(prod)
  let data = await Products.updateOne({id:+id},{$set:prod})
  res.json('data updated')
}

module.exports={
    allproduct,
singleproduct,
deleteproduct,
updateproduct

}