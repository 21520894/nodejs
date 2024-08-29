const path = require ('path')

const getHomePage =  (req, res) => {
    console.log (__dirname)
	res.sendFile(path.join(__dirname,'../views/index.html'))
}

module.exports = {
    getHomePage
}