const connection = require ("../config/database")

const getAllUsers = async() =>{
    let [result,field] = await connection.query(`SELECT * FROM users u`);
    return result;
}
const getUserByID = async (userID) => {
    let [result,field] = await connection.query ('SELECT * FROM users where id = ?',[userID]);
    let user = result && result.length > 0 ? result[0] : {};
    
    return user;
}

const postUpdateUserByID = async (email, name, city, userID) =>{
    const [result, field] = await connection.query (`UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`,[email,name,city,userID])
}

const deleteUserByID = async (userID) =>{
    const [result, field] = await connection.query(`DELETE FROM users WHERE id = ?`,[userID]);
}
module.exports = {getAllUsers,getUserByID,postUpdateUserByID,deleteUserByID}