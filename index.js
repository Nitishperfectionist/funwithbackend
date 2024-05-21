require('dotenv').config();

const express=require("express");
const app=express();
const port=4000;

app.get("/",(req,res)=>{
   res.send("Hello world")
});
app.get("/twitter",(req,res)=>{
    res.send("twitter url")
 });
 app.get("/youtube",(req,res)=>{
    res.send("Hello world youtube")
 });
  

app.listen(process.env.PORT,()=>{
 console.log(`backened is running on ${port}`);
})