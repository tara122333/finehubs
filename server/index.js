import './database/connection';  // database connection 
import express from 'express';

const app = express();



// Application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//import microservices
import Auth from './API/Auth';




//use microservices;
app.use("/auth",Auth);


app.get("/",(req,res)=>{
    res.json({message : "Success"});
});

app.listen(4000,()=>{
    console.log("server has been started");
})

