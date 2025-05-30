let express= require('express')
let app=express()
let productRouter =require('./Router/Products')
app.use(express.json())

app.use('/',productRouter)

app.listen(3000,()=>{
    console.log('server started')
})