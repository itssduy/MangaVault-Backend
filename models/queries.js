const db = require('./pool');

const getAllUsers = ()=>{
    const { rows } = db.query('SELECT * FROM users');
    return rows;
}

const getUser = ()=>{
    
}

const createUser = ()=>{

}

const authenticateUser = (data)=>{

}


