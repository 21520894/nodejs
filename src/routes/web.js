const express = require ('express');
const router = express.Router()
const path = require('path')
const {getHomePage} = require('../controllers/homeController')

router.get("/html", getHomePage);

module.exports = router