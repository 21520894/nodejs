const path = require ('path')
const connection = require('../config/database')
const {getAllUsers }= require('../service/CRUDService') 


const getHomePage = async(req, res) => {
    let result = await getAllUsers();
	res.render(path.join(__dirname,'../views/index.ejs'),{listUsers:result});
};

const postCreateUser = async (req,res) =>{


    let {email, name, city} = req.body;
    // connection.query(   
    //     `INSERT INTO users (email, name, city) values (?,?,?)`,[email,name,city],
    //     function(err, result){
    //         console.log(result);
    //         res.send("create user success");
    //     }
    // );
    const [result,field] = await connection.query(`INSERT INTO  users (email, name, city) values (?,?,?)`,[email,name,city]);

    console.log (">>> result: ", result);
    res.send("Create new user success!")
};

const getCreatePage = (req,res) => {

    res.render(path.join (__dirname,'../views/create.ejs'))
     
}

module.exports = {
    getHomePage,postCreateUser,getCreatePage
}