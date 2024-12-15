const express = require ('express')
const app = express()
const path = require('path')
const port = 8000

const staticPath = path.join(__dirname,"public")

app.use(express.static(staticPath))

app.get('/', (req , res)=>{
    res.send("Hey express")
})

app.listen(8000,()=>{
    console.log(`Listening the port at ${port}`)
})