const http = require("http");

///מתרגם לנו את המלל שיש לנו body ב
const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use('/ddd',(req,res)=>{
    res.send("h")
})
app.use('/',(req,res)=>{
    res.send("hello")
})


app.listen(3000);
