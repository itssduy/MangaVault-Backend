const express = require('express');
const path = require('path');

const PORT = process.env.PORT


const mangaRoute = require('./routes/mangaRoute');
const authRoute = require('./routes/authRoute');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Routes
app.use('/', mangaRoute);
app.use('/auth/', authRoute)


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`)
})
