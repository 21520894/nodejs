const express = require ('express');
const router = express.Router()
const path = require('path')
const {getHomePage,postCreateUser,getCreatePage,getEditPage,postUpdateUser,deleteUser} = require('../controllers/homeController')

router.get("/html", getHomePage);
router.get("/create",getCreatePage);
router.get("/updateUser/:userID",getEditPage);
router.post('/createUser',postCreateUser);
router.post('/updateUser',postUpdateUser);
router.post('/deleteUser/:userID',deleteUser);

module.exports = router