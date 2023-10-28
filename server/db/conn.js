const dotenv=require("dotenv")
const mongoose = require("mongoose");
dotenv.config({path: './config.env'})
const DB = process.env.DB

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})