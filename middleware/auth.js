const queries = require('../models/queries');
// If there is an apikey in db associated with the user then let them go to the page
const auth = (res, req, next)=>{
    key = queries.getApiKey();
    next();
}

module.exports = {
    auth
}