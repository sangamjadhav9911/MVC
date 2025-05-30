let express= require('express')
let app=express()
let productRouter =require('./Router/Products')
let cartrouter=require('./Router/carts')
app.use(express.json())
//only product url
app.use('/',productRouter)
//ocart url
app.use('/cart/',cartrouter)

app.listen(3000,()=>{
    console.log('server started')
})