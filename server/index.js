import express from 'express';

const app = express();


app.get("/",(req,res)=>{
   res.send("this is home page"); 
});

app.listen(4000,()=>{
    console.log("server has been started");
})

