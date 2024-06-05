

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

        const {profileImg, firstName, lastName, email, address} = req.body;
        
        let user = await User.findOne();
        if(user){

           if(profileImg) user.profileImg = profileImg;
            if(firstName)user.firstName = firstName;
           if(lastName) user.lastName = lastName;
            if(email) user.email= email;
           if(address) user.address = address;
        }
        else{
            user = new User({
                profileImg, 
                firstName,
                lastName,
                email,
                address
            })
        }

        await user.save();
        res.status(200).json(user);
     } catch (error) {
        res.status(500).send("An error Occured", error.massage);
     }
    
});


module.exports = router;