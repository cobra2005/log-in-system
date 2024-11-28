const express = require('express');
const router = express.Router();
const signInController = require('../app/controllers/SignInController');

router.use('/', signInController.signIn);

module.exports = router;