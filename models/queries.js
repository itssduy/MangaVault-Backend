const db = require('./pool');


const getAllUsers = async ()=>{
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
}

const getUser = async (id)=>{
    const { rows } = await db.query('SELECT * FROM users WHERE id=($1)', [id]);
    return rows[0];
}
const getUserByName = async (name) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username=($1)', [name]);
    return rows[0];
}
const createUser = async (username, password)=>{
    const { rows } = await db.query('INSERT INTO users (username, password) VALUES(($1), ($2)) RETURNING *', [username, password]);
    return rows[0];
}

const loginUser = async (username, password) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username=($1) AND password=($2)', [username, password]);
    if(rows[0]){
        return rows[0]
    }
    return null;
}
const createApiKey = async (userID)=>{
    const { rows } = await db.query('INSERT INTO api_keys (user_id) VALUES ($1) RETURNING *', [userID]);
    return rows;
}
const getApiKey = async (userID)=>{
    const { rows } = await db.query('SELECT * FROM api_keys WHERE user_id=($1)', [userID]);
    return rows[0];
}

const deleteApiKey = async (key)=>{
    const { rows } = await db.query('DELETE * FROM api+keys WHERE key=($1)', [key]);
}

const getAllMangas = async ()=>{
    const { rows } = await db.query('SELECT * FROM mangas');
    return rows
}

const getMangasById = async (id)=>{
    const { rows } = await db.query('SELECT * FROM mangas WHERE key=($1)', [id]);
    return rows
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    createApiKey,
    getApiKey,
    deleteApiKey,
    loginUser,
    deleteApiKey,
    getUserByName,
    getAllMangas,
    getMangasById
}