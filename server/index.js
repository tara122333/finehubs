import './database/connection';  // database connection 
import express from 'express';
import { UserModel } from './database/user';

const app = express();


app.get("/",(req,res)=>{
   res.send("this is home page"); 
});

app.listen(4000,()=>{
    console.log("server has been started");
})

