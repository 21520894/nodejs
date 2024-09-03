const connection = require ("../config/database")

const getAllUsers = async() =>{
    let [result,field] = await connection.query(`SELECT * FROM users u`);
    return result;
}

module.exports = {getAllUsers}