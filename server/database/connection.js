import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/EcomFineHubs',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Data Base connection successfully");
}).catch((error)=>{
    console.log(`Error is : ${error}`);
});
