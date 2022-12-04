import express from 'express';

import {UserModel} from '../../database/allModel';
 

const Router = express.Router();


Router.post("/signin",async(req,res)=>{
    try {
        // const data = await req.body.credentials;
        UserModel.findByMobileAndEmail(req.body.credentials);

        console.log(data);
        return res.status(200).json({
            message : "user added successfully",status:"success"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

Router.post("/signup",async(req,res)=>{
    try {
        const data = await req.body.credentials;
        const findUserEmail = await UserModel.findOne({email}); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;