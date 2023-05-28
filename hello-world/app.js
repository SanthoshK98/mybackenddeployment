const express = require('express');
const serverless = require('serverless-http');
const app = express();
const port = 5000;

app.use(express.json());



app.get('/get',(req,res)=>{
    return res.json({message:'It is working good'})
})







app.listen(port,()=>{
    console.log(`it is running on the port ${port}`)
})

module.exports.handler = serverless(app)