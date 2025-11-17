const {Client} = require('pg');
require('dotenv').config();


const SQL = `


    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS api_keys;
    DROP TABLE IF EXISTS mangas;
    DROP TABLE IF EXISTS categorys;
    DROP TABLE IF EXISTS bookmarks;
    DROP TABLE IF EXISTS reviews;


    CREATE TABLE users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(32) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE api_keys (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id INTEGER NOT NULL
    );

    CREATE TABLE mangas (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(64),
        rating INTEGER,
        img TEXT,
        pages INTEGER,
        catogry_id INTEGER
    );

    CREATE TABLE bookmarks (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL,
        manga_id INTEGER NOT NULL
    );

    CREATE TABLE reviews (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL,
        manga_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        rating INTEGER,
        text VARCHAR(512)
    );

    CREATE TABLE categorys (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(64) NOT NULL
    );

`

const connectionString = `${process.env.DB_URL}`


async function main(){

    const client = new Client({
        connectionString: connectionString,
        ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

}

main();
