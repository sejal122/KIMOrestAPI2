const express = require('express')
const cors=require('cors')
const app=express();
const router=require('./routes/router')
require("../src/db/conn")
app.use(cors())
app.use(router)






app.listen(8000,()=>{
    console.log('connected to 8000...')
})



