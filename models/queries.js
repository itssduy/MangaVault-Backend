const db = require('./pool');


const getAllUsers = async ()=>{
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
}

const getUser = async (id)=>{
    const { rows } = await db.query('SELECT * FROM users WHERE id=($1)', [id]);
    return rows;
}

const createUser = async (username, password)=>{
    const { rows } = await db.query('INSERT INTO users (username, password) VALUES(($1), ($2))', [username, password]);
    return rows;
}

const createApiKey = async (userID)=>{
    const { rows } = await db.query('INSERT INTO api_keys (user_id) VALUES ($1)', [userID]);
    return rows;
}
const authenticateUser = async (key)=>{
    const { rows } = await db.query('SELECT * FROM api_keys WHERE key=($1)', [key]);
    return rows;
}


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    createApiKey,
    authenticateUser
}