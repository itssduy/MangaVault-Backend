const queries = require('../models/queries');
// If there is an apikey in db associated with the user then let them go to the page

const auth = (res, req, next)=>{
    //console.log('auth middleware')
    next();
}

module.exports = {
    auth
}