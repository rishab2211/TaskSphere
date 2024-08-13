const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.post("/",(req,res)=>{

})

app.put("/",(req,res)=>{

})

app.listen(port,()=>{
    console.log(`Port is listening at ${port}.`);
    
})