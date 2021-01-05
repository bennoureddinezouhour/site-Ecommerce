const express =require('express')
const app=express()
const conncetDB=require("./helpers/connectDB")

conncetDB()

app.use(express.json());
app.use('/register',require("./routes/register"))
app.use('/login',require('./routes/login'))
app.use('/product',require('./routes/product'))
app.use('/panier',require('./routes/panier'))











const PORT =  process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is run on PORT:${PORT}`))
