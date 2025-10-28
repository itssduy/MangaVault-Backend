const query = require('../models/queries');

const getAll = async (req, res)=>{
    res.render("home");
}

const getManga = (req, res)=>{
    console.log('manga')
    res.send('/manga')
}


module.exports = {
    getAll,
    getManga
}