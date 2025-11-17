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

    res.render('addmanga');
}
const postaddManga = async (req,res)=>{
    const {title, author, rating, img, pages} = req.body

    const manga = await query.addManga(title, author, rating, img, pages);

    console.log(manga);
    res.redirect('/manga/home');
}

const deleteManga = async (req, res)=>{
    const mangaId = req.params.id
    await query.deleteManga(mangaId);
    res.redirect('/manga/home');
}

const geteditManga = async (req, res) => {
    const mangaId = req.params.id;
    const manga = await query.getMangaById(mangaId);
    res.render('editmanga', {manga: manga});
}

const posteditManga = async (req, res) => {
    const mangaId = req.params.id;
    const {title, author, rating, img, pages} = req.body
    await query.editManga(mangaId ,title, author, rating, img, pages);

    res.redirect('/manga/home');



}
module.exports = {
    getAll,
    getManga,
    postaddManga,
    getaddManga,
    deleteManga,
    geteditManga,
    posteditManga
}