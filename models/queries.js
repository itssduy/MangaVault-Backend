const db = require('./pool');


const getAllUsers = async ()=>{
    const { rows } = await db.query('SELECT * FROM users');
    return rows;
}

const getUser = async (id)=>{
    const { rows } = await db.query('SELECT * FROM users WHERE id=($1)', [id]);
    return rows[0];
}
const getUserByName = async (name) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username=($1)', [name]);
    return rows[0];
}
const createUser = async (username, password)=>{
    const { rows } = await db.query('INSERT INTO users (username, password) VALUES(($1), ($2)) RETURNING *', [username, password]);
    return rows[0];
}

const loginUser = async (username, password) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username=($1) AND password=($2)', [username, password]);
    if(rows[0]){
        return rows[0]
    }
    return null;
}
const createApiKey = async (userID)=>{
    const { rows } = await db.query('INSERT INTO api_keys (user_id) VALUES ($1) RETURNING *', [userID]);
    return rows;
}
const getApiKey = async (userID)=>{
    const { rows } = await db.query('SELECT * FROM api_keys WHERE user_id=($1)', [userID]);
    return rows[0];
}

const deleteApiKey = async (key)=>{
    const { rows } = await db.query('DELETE * FROM api_keys WHERE key=($1)', [key]);
}

const getAllMangas = async ()=>{
    const { rows } = await db.query('SELECT * FROM mangas');
    return rows
}

const getMangaById = async (id)=>{
    const { rows } = await db.query('SELECT * FROM mangas WHERE id=($1)', [id]);
    return rows[0];
}

const deleteManga = async (id) => {
    const { rows } = await db.query('DELETE FROM mangas WHERE id=($1)', [id]);
    return rows;
}

const addManga = async(title, author, rating, img, pages)  => {
    const { rows } = await db.query('INSERT INTO mangas (title, author, rating, img, pages) VALUES ($1,$2,$3,$4, $5) RETURNING *', [title, author, rating, img, pages]);
    return rows;
}

const editManga = async (id, title, author, rating, img, pages) => {
    const { rows } = await db.query('UPDATE mangas SET title=($1), author=($2), rating=($3), img=($4), pages=($5) WHERE id=($6)', [title, author, rating, img, pages, id]);
    return rows;
}

const getBookmarks = async (userID)=> {
    const { rows } = await db.query('SELECT * from bookmarks WHERE user_id=($1)', [userID]);
    return rows;
}

const addBookmark = async (userID, mangaID) => {
    const { rows } = await db.query('INSERT INTO bookmarks (user_id, manga_id) VALUES ($1, $2) RETURNING *', [userID, mangaID]);
    return rows;
}

const deleteBookmark = async (id) => {
    const { rows } = await db.query('DELETE * from bookmarks WHERE id=($1)', [id]);
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    createApiKey,
    getApiKey,
    deleteApiKey,
    loginUser,
    deleteApiKey,
    getUserByName,
    getAllMangas,
    getMangaById,
    addManga,
    deleteManga,
    editManga,
    getBookmarks,
    deleteBookmark,
    addBookmark
}