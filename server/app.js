<<<<<<< Updated upstream
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send(`hello world`);
});

app.listen(7000,()=>{
    console.log(`aerver is running`);
=======
const express = require('express');
const app = express();

app.get('/' ,(req,res) =>{
    res.send(`hello world from the server`);
});

app.listen(7000,()=>{
    console.log(`server is runnimg at port no 7000`);
>>>>>>> Stashed changes
})