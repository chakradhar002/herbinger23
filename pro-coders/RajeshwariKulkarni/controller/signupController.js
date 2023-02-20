const express = require('express');
const router = express.Router();
const service = require('../services/signUpservices'); 


router.post('/signup',service.signUp);



module.exports = {router}