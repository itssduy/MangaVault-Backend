const express = require('express');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT


const mangaRoute = require('./routes/mangaRoute');
const authRoute = require('./routes/authRoute');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Routes
app.use('api/auth/', authRoute)

app.use('api/manga/', mangaRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`)
})
