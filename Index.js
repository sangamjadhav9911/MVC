let express= require('express')
let app=express()
let productRouter =require('./Router/Products')
let cartrouter=require('./Router/carts')
let userrouter=require('./Router/user')
app.use(express.json())
//only product url
app.use('/',productRouter)
//ocart url
app.use('/cart/',cartrouter)
app.use('/user/',userrouter)
app.listen(3000,()=>{
    console.log('server started')
})