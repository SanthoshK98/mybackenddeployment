const express = require('express');
const app = express();
const serverless = require('serverless-http');
const port = 5000;
app.use(express.json());



app.get('/get',()=>{
    return res.json({message:'It is working fine'})
})







app.listen(port,()=>{
    console.log(`it is running on the port ${port}`)
})

module.exports.handler = serverless(app)