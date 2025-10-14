const db = require('./pool');

const getAllUsers = ()=>{
    const { rows } = db.query('SELECT * FROM users');
    return rows;
}

const getUser = (id)=>{
    const { rows } = db.query('SELECT * FROM users WHERE id=($1)', [id]);
    return rows;
}

const createUser = (username, password)=>{
    const { rows } = db.query('INSERT INTO users (username, password) VALUES ($1), ($2)', [username. password]);
    return rows;
}

const createApiKey = (userID)=>{
    const { rows } = db.query('INSERT INTO api_keys (user_id) VALUES ($1)', [userID]);
    return rows;
}
const authenticateUser = (key)=>{
    const { rows } = db.query('SELECT * FROM api_keys WHERE key=($1)', [key]);
    return rows;
}


