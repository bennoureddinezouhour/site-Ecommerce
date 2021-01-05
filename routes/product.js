const express=require('express')
const router=express.Router()
const product=require('../models/product')
const authMeddleware=require('../helpers/authMiddleware')
const { body, validationResult } = require('express-validator');

router.post('/',(req,res)=>{
    
    
    let newProduct = new product(req.body)
    newProduct.save()
    res.status(200).json(newProduct)
})

router.get('/',(req,res)=>{
    product.find({})
    .then((data)=>{
    if(!data){
        res.status(400).json( "product not found")
    }
    res.status(200).json(data)
}
    )
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
})





module.exports=router