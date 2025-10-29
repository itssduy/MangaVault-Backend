const { Client } = require('pg');
require('dotenv').config();

const SQL =  `
    INSERT INTO users (username,password) 
    VALUES 
        ('bob', '12345'),
        ('test', 'test123'),
        ('admin', 'pass');


    INSERT INTO mangas (title, author, rating, pages)
    VALUES
        ('jjba', 'Araki', 5, 500);
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
