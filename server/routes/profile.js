

const express = require('express');
const router = express.Router();

const User = require('../models/User');
const { body, validationResult } = require('express-validator');



// router to get the profile details
router.get('/', async (req, res) => {
    try {
        let user = await User.find();
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(400).send(" No Account Found, please create one")
        }
    } catch (error) {
        res.send("An Error Occured")
    }
})


//route to update or create the profile 
router.post('/', async(req, res) => {     
   
     try {

        const userDetails = req.body;  
        console.log('Payload size:', JSON.stringify(userDetails).length, 'bytes');
        let user = await User.findOne();
        if(user){

           if(userDetails.profileImg) user.profileImg = userDetails.profileImg;
            if(userDetails.firstName)user.firstName = userDetails.firstName;
           if(userDetails.lastName) user.lastName = userDetails.lastName;
            if(userDetails.email) user.email= userDetails.email;
           if(userDetails.address) user.address = userDetails.address;
        }
        else{
            user = new User(userDetails);
        }

        await user.save();
        res.status(200).json(user);
     } catch (error) {
        res.status(500).send("An error Occured", error.massage);
     }
    
});


module.exports = router;