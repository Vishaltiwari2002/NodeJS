require("dotenv").config();
const connectDB  = require("./db/Connect");

const product = require("./models/Data")

const ProductJson = require("./package.json")

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await product.create(ProductJson)
        console.log("Success");
    }
    catch(error){
        console.log(error);
    }
}

start();