const db = require('./pool');

const getAllUsers = ()=>{
    const { rows } = db.query('SELECT * FROM users');
    return rows;
}

const getUser = (id)=>{
    const { rows } = db.query(`SELECT * FROM users WHERE id=($1)`, [id])
    return rows;
}

const createUser = ()=>{

}

const authenticateUser = (data)=>{

}


