const express=require('express');
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send ("hello wrold")
})
app.get("/about",(req,res)=>{
    res.send("this is my home page ")
})
app.listen(port,()=>{
   console.log(`app listen on port ${port }`)

})
