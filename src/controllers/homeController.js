const path = require("path");
const connection = require("../config/database");
const {
	getAllUsers,
	getUserByID,
	postUpdateUserByID,
	deleteUserByID,
} = require("../service/CRUDService");

const getHomePage = async (req, res) => {
	let result = await getAllUsers();
	res.render(path.join(__dirname, "../views/index.ejs"), { listUsers: result });
};

const postCreateUser = async (req, res) => {
	let { email, name, city } = req.body;
	// connection.query(
	//     `INSERT INTO users (email, name, city) values (?,?,?)`,[email,name,city],
	//     function(err, result){
	//         console.log(result);
	//         res.send("create user success");
	//     }
	// );
	const [result, field] = await connection.query(
		`INSERT INTO  users (email, name, city) values (?,?,?)`,
		[email, name, city]
	);

	console.log(">>> result: ", result);
	res.send("Create new user success!");
};

const getCreatePage = (req, res) => {
	res.render(path.join(__dirname, "../views/create.ejs"));
};

const getEditPage = async (req, res) => {
	const userID = req.params.userID;
	const user = await getUserByID(userID);
	res.render(path.join(__dirname, "../views/edit.ejs"), { userEdit: user });
};

const postUpdateUser = async (req, res) => {
	let { email, name, city, userID } = req.body;
	//console.log (userID);
	await postUpdateUserByID(email, name, city, userID);
	//res.send ('Update User success!');
	res.redirect("/html");
};

const deleteUser = async (req, res) => {
	let userID = req.params.userID;
	console.log(userID);
	await deleteUserByID(userID);
	res.redirect("/html");
};
module.exports = {
	getHomePage,
	postCreateUser,
	getCreatePage,
	getEditPage,
	postUpdateUser,
	deleteUser,
};
