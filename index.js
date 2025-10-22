const express = require('express');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT



const mangaRoute = require('./routes/mangaRoute');
const authRoute = require('./routes/authRoute');

const app = express();


app.use(express.urlencoded({extended: true}))

//Routes
app.use('/auth', authRoute)

app.use('/manga', mangaRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on ${process.env.HOST}:${PORT}`)
})
