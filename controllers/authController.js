
const query = require('../models/queries');


const getSignup = (req, res)=>{
    res.render("signup")
}

const postSignup = async (req, res)=>{
    
    const { username, password} = req.body;
    if(username && password){
        // check for duplicate user

    
        var user = await query.getUserByName(username)

        if(user){
            console.log('theres already a user with this name')
            res.send('there is already a user with this name')
            //console.log(user);
            return;

        } else {
            console.log("user created")
            user = await query.createUser(username, password);

        }

        const userId = user.id;

        var key = await query.getApiKey(userId)

        if(key){
            //console.log("Theres already a key! " + key);
        } else
        {
            key = await query.createApiKey(userId);

        }
        res.redirect("/manga/home");

    }else {
        res.send('username or password undefined');
        return;
    }
}


const getLogin = (req, res)=>{
    res.render("login");
}

const postLogin = async (req, res)=>{
    const {username, password} = req.body

    const login = await query.loginUser(username, password);
    if(login)
    {
        const userId = login.id;

        var key = await query.getApiKey(userId)

        if(key){
            //console.log("Theres already a key! " + key);
        } else
        {
            key = await query.createApiKey(userId);

        }

        //Add apikey to local storage?
        res.redirect("/manga/home");
    } else {
       //res.send("invalid");
    }


}


module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin
}