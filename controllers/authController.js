
const query = require('../models/queries');


const getSignup = (req, res)=>{
    res.render("signup")
}

const postSignup = (req, res)=>{
    
    const { username, password} = req.body;
    if(username && password){
        result = query.createUser(username, password);
        console.log("user created")
    }else {
        res.send('username or password undefined');
        return;
    }
    res.redirect('/auth/login');
}


const getLogin = (req, res)=>{
    res.render("login");
}

const postLogin = async (req, res)=>{
    const {username, password} = req.body

    const login = await query.loginUser(username, password);
    if(login)
    {

        //Add apikey to local storage
        res.redirect("/manga/home");
    } else {
        res.send("invalid");
    }


}



module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin
}