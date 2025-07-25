const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const connectDb = async() =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected:", connect.connection.host)
    } catch (error) {
        
        console.log(err);
        process.exit(1)
    }
};


module.exports = connectDb;