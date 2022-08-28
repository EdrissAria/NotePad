const {check} = require('express-validator'); 

exports.signupValidation = [
    check('username', 'username is required!').not().isEmpty(), 
    check('password', 'password is required!').not().isEmpty() 
]