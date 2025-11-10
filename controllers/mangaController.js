const query = require('../models/queries');

const getAll = async (req, res)=>{
    const mangas = await query.getAllMangas();

    console.log(mangas);

    res.render("home", {mangas: mangas});
}

const getManga = (req, res)=>{
    console.log('manga')
    res.send('/manga')
}


module.exports = {
    getAll,
    getManga
}