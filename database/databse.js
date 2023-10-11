const mongoose = require("mongoose")
require('dotenv').config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(
        console.log("DB connected successfully")
    )
    .catch((error)=>{
        console.log("DB connection failed")
        console.log(error);
        process.exit(1)
    })
}