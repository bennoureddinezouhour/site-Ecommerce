const express=require('express')
const router=express.Router()
const { body, validationResult } = require("express-validator");
const client=require('../models/client')
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
require('dotenv').config() 


router.post("/",
[
    body("email", "please enter a valid Eamail").isEmail(),
    body("password", "please write your password").notEmpty()
 
    
  ],
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    client.find({email:req.body.email})
      .then((user)=>{
          if(!user.length){
             return  res.status(401).json([{msg:"please register before"}])
          }
          bcrypt.compare(req.body.password,user[0].password)
          .then((result)=>{
              if(!result){
                 return res.status(400).json([{msg:"please enter a valid password"}])
              }

              let paylode={
                clientId: user[0]._id,
                role: user[0].role
            }
            jwt.sign(paylode,process.env.SECRET,(err,token)=>{
                if (err){
                    throw err
                }
                res.send({token:token,role:user[0].role})
                
            })


            
        });

      })
      .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })

})







module.exports=router