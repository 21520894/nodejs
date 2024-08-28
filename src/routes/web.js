const express = require ('express');
const router = express.Router()
const path = require('path')

router.get("/html", function (req, res) {
    console.log (__dirname)
	res.sendFile(path.join(__dirname,'../views/index.html'))
});

module.exports = router