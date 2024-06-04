

const express = require('express');
const router = express.Router();

const User = require('../models/User');
const { body, validationResult } = require('express-validator');



router.get('/', async (req, res) => {

})


router.post('/', async (req, res) => {    //if there is existing profile then this router will update the user details, otherwise it
                                                                //   will create a user in mongoatlas 

    
})                                            