const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send(`hello world`);
});

app.listen(7000,()=>{
    console.log(`aerver is running`);
})