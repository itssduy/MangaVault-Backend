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

const loginUser = async (username, password) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username=($1) AND password=($2)', [username, password]);
    if(rows[0]){
        return rows[0]
    }
    return null;
}
const createApiKey = async (userID)=>{
    const { rows } = await db.query('INSERT INTO api_keys (user_id) VALUES ($1)', [userID]);
    return rows;
}
const getApiKey = async (key)=>{
    const { rows } = await db.query('SELECT * FROM api_keys WHERE key=($1)', [key]);
    return rows;
}

const deleteApiKey = async (key)=>{
    const { rows } = await db.query('DELETE * FROM api+keys WHERE key=($1)', [key]);
}


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    createApiKey,
    getApiKey,
    deleteApiKey,
    loginUser,
}