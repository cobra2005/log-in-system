const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/sign-up', siteController.signUp);
router.use('/', siteController.home);

module.exports = router;