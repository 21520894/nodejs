const express = require ('express');
const router = express.Router()
const path = require('path')
const {getHomePage,postCreateUser,getCreatePage} = require('../controllers/homeController')

router.get("/html", getHomePage);
router.get("/create",getCreatePage);

router.post('/createUser',postCreateUser);

module.exports = router