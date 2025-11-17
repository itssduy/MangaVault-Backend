const query = require('../models/queries');
const { get } = require('../routes/mangaRoute');

const getAll = async (req, res)=>{
    const mangas = await query.getAllMangas();

    //console.log(mangas);

    res.render("home", {mangas: mangas});
}

const getManga = (req, res)=>{
    //console.log('manga')
    res.send('/manga');
}

const getaddManga = (req,res)=>{

    console.log('test')
    res.render('addmanga');
}
const addManga = (req,res)=>{

    //res.redirect(manga page)
}

const deleteManga = (req, res)=>{
    //const mangaId = req
    res.redirect('manga/home');
}

module.exports = {
    getAll,
    getManga,
    addManga,
    getaddManga,
    deleteManga
}