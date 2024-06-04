
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  

   profileImg:{
       
   } ,
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    }


})