const monngoose=require('mongoose')

const productSchema=monngoose.Schema({
    url:String,
    name:String,
    category:String,
    description:String,
    référence:String,
    price:String
})


module.exports=monngoose.model('product',productSchema)