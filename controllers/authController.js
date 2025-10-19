const query = require('../models/queries');


export const getSignup = (req, res)=>{
    console.log("signup");
    res.send('auth/signup');
}

export const postSignup = (req, res)=>{
    console.log("signup");
    
    const { username, password} = req.body;
    query.createUser(username, password)
    res.send('/auth/signup');
}


export const getLogin = (req, res)=>{
    console.log("login");
}

export const postLogin = async (req, res)=>{
    const {username, password} = req.body

    const login = await query.loginUser(username, password);
    res.send('/auth/login');
    

}

