
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  

   profileImg:{
       type:String,
       required:true
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



module.exports = mongoose.model('user', UserSchema);