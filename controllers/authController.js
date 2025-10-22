
const query = require('../models/queries');


const getSignup = (req, res)=>{
    console.log("signup");
    res.send('auth/signup');
}

const postSignup = (req, res)=>{
    console.log("signup");
    
    const { username, password} = req.body;
    query.createUser(username, password)
    res.send('/auth/signup');
}


const getLogin = (req, res)=>{
    console.log("login");
}

const postLogin = async (req, res)=>{
    const {username, password} = req.body

    const login = await query.loginUser(username, password);
    if(login)
    {
        print(login);
    }
    res.send('/auth/login');
    

}



module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin
}