let express=require('express')
const { allproduct, singleproduct, deleteproduct, updateproduct } = require('../controller/Products')
let Products=require('../model/Products')
let router=express.Router()

router.get('/',allproduct)
// router.get('/',async(req,res)=>{
//     let data = await Products.find()
//     res.json(data)
//     // res.json("hello world")
// })
//get student by ID
router.get('/:id',singleproduct)
// router.get('/:id', async (req, res) => {
//   let id = req.params.id

//   let data = await Products.find({id:+id})
//   res.json(data)
// })



//delete student by ID
router.delete('/:id',deleteproduct)
// router.delete('/:id', async (req, res) => {
//   let id = req.params.id

//   let data = await Products.deleteOne({id:+id})
//   res.json('data deleted')
// })

//update student by ID
router.patch('/:id',updateproduct)
// router.patch('/:id', async (req, res) => {
//   let id = req.params.id
//   let prod = req.body
//   console.log(prod)
//   let data = await Products.updateOne({id:+id},{$set:prod})
//   res.json('data updated')
// })


//update student by ID
router.post('/', async (req, res) => {
  
  let prod = req.body

  let data = await Products.insertOne(prod)
  res.json('data inserted')
})




module.exports=router
