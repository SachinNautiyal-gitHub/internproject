

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const MongoUri = process.env.DB_KEY;


const ConnectToMongo = ()=>{
    try {
        mongoose.connect(MongoUri);
        console.log("connected with mongodb atlas");
    } catch (error) {
        console.log("failed to connect with mongodb server", error);
    }
}


module.exports = ConnectToMongo;