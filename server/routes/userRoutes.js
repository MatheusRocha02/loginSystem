const express = require('express');
const {registerUser, loginUser} = require('../controllers/userController')

const router = express.Router();

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

module.exports = router;
