import express from 'express';
import passport from 'passport';

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

// Router.post("/signup",async(req,res)=>{
//     try {
//         const data = await req.body.credentials;
//         const findUserEmail = await UserModel.findOne({email}); 
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// });


/* 
route      ==> /signup
method     ==> POST
Des        ==> signup using email Id, password, and Name
params     ==> none
Access     ==> public
*/

Router.post("/signup",async(req,res)=>{
    try{
        // const data = await req.body.credentials;
        await UserModel.findByMobileAndEmail(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        return res.status(201).json({
            message : "user added successfully",status:"success"
        });

    }catch(error){
        return res.status(500).json({error : error.message});
    }
});







/* 
route      ==> /google
method     ==> GET
Des        ==> Google signin
params     ==> none
Access     ==> public
*/
Router.get("/google",
    passport.authenticate("google",{
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/user.phonenumbers.read"
        ],
    }
));


/*
route      ==> /google/callback
method     ==> GET
Des        ==> Google signin callback
params     ==> none
Access     ==> public


*/


Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      // Successful authentication, redirect home.
      return res.redirect(
        `http://localhost:3000/home`
      );
    }
  );



export default Router;