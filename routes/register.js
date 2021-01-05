const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const client = require("../models/client");
const bcrypt = require("bcryptjs")
const jwt=require("jsonwebtoken")
require('dotenv').config()

router.post(
  "/",
  [
    body("firstname", "firstName must containe only alphabetic").isAlpha(),
    body("lastname", "lastName must contain only alphabetic").isAlpha(),
    body("email", "please enter a valid Email").isEmail(),
    body("password", "password length allowed is 5 characters").isLength({
      min: 5,
    }),
    body("phone", "phone must contain only number").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    client.find({ email: req.body.email })
      .then((user) => {
        if (user.length) {
          return res.status(400).send([{ msg: "client already exists" }]);
        }
        let newClient = new client(req.body);

        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                throw err 
            }
          bcrypt.hash(req.body.password, salt, (err2, hashSw) => {
            if (err2) {
              throw err2;
            }
            newClient.password = hashSw;
            newClient.save(); 
          });
        });

        

        let paylaod={
            clientId: newClient._id,
            role: newClient.role
        }
        jwt.sign(paylaod,process.env.SECRET,(err,token)=>{
            if (err){
                throw err
            }
            res.send({token:token,role:"client"})
            
        })
        
      })
      .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
   
  }
);

module.exports = router;
