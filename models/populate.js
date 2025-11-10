const { Client } = require('pg');
require('dotenv').config();

const SQL =  `
    INSERT INTO users (username,password) 
    VALUES 
        ('test', 'pass');


    INSERT INTO mangas (title, author, rating, pages, img)
    VALUES
        ('Jojo''s Bizarre Adventure', 'Araki', 5, 500, 'https://imgs.search.brave.com/ZIb0o9la9WgW9BaC_rrhrhjZ39JsbQtjJZe8o8-7Piw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzJl/L2Q3L2U5MmVkNzRk/NTg4OTljNTdlMDlm/YjA4ZDU4YjViZGVh/LmpwZw');

    INSERT INTO mangas (title, author, rating, pages, img)
    VALUES
        ('Dragon Ball', 'Akira Toriyama', 4, 1000, 'https://imgs.search.brave.com/b1BxuluDN0qGAQR0ZUoHBooqiDK5nfCCpwXmh6X_hAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUxL2Y1/LzAyLzUxZjUwMjkw/NDI1MTBiYmQyNGFi/OTU3OTFiNDA4OTk4/LmpwZw');
`
const connectionString = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DB}`


async function main(){

    const client = new Client({
        connectionString: connectionString,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

}

main();
