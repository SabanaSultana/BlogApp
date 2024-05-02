import express from "express"
import User from "../models/user.js";

export const signUp =async(req,res)=>{
    try{
        const user=req.body;
        //validation
        const newUser=new User(user)
        await newUser.save();
        return res.status(200).json(
            {
                success:true,
                msg:"signed up successfully"
            }
        )

    }
    catch(error){
        console.log("error while signing up",error)
        return res.status(500).json(                   // maybe error on save method 
            {
                success:false,
                msg:"internal server error "
            }
        )
    }
}