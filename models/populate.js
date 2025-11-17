const { Client } = require('pg');
require('dotenv').config();

const SQL =  `
    INSERT INTO users (username,password) 
    VALUES 
        ('test', 'pass');


    INSERT INTO mangas (title, author, rating, pages, img)
    VALUES
        ('Jojo''s Bizarre Adventure', 'Hirohiko Araki', 5, 900, 'https://imgs.search.brave.com/ZIb0o9la9WgW9BaC_rrhrhjZ39JsbQtjJZe8o8-7Piw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5LzJl/L2Q3L2U5MmVkNzRk/NTg4OTljNTdlMDlm/YjA4ZDU4YjViZGVh/LmpwZw'),
        ('Dragon Ball', 'Akira Toriyama', 4, 1000, 'https://imgs.search.brave.com/b1BxuluDN0qGAQR0ZUoHBooqiDK5nfCCpwXmh6X_hAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUxL2Y1/LzAyLzUxZjUwMjkw/NDI1MTBiYmQyNGFi/OTU3OTFiNDA4OTk4/LmpwZw'),
        ('Attack on Titan', 'Hajime Isayama', 5, 600, 'https://imgs.search.brave.com/cUtPGu41JJizYpXhNvmE7Ke3dwhPs6zfQYFKgnG0FOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpqbGlPRFk1/TXpRdE1tVmlaQzAw/TVRabUxXRmhNV010/TWpNd00ySTNPR1kx/TVRSaVhrRXlYa0Zx/Y0djQC5qcGc'),
        ('One Piece', 'Eiichiro Oda', 5, 1100, 'https://imgs.search.brave.com/C9SXxaThVk2Oey9j-0-q-8eQnZd16drumhW65V9bx94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vOS85MC9P/bmVfUGllY2UlMkNf/Vm9sdW1lXzYxX0Nv/dmVyXyUyOEphcGFu/ZXNlJTI5LmpwZw'),
        ('Death Note', 'Tsugumi Ohba', 4, 310, 'https://imgs.search.brave.com/dHn_2Tal3-9Lm2Z1PWHDZ51kPQQxdGv9ZypNBy3nH58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxMDN1NXUtYWxM/LmpwZw'),
        ('Fullmetal Alchemist', 'Hiromu Arakawa', 5, 400, 'https://imgs.search.brave.com/BsL2-ym3hx2wLL9tB2B2qQ2RUab5nAobxj11jErkXYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85ZC9GdWxsbWV0/YWwxMjMuanBnLzUx/MnB4LUZ1bGxtZXRh/bDEyMy5qcGc'),
        ('Naruto', 'Masashi Kishimoto', 4, 720, 'https://imgs.search.brave.com/K333tzx2C-_e-v5j04H0hhfJWCMS4xOvqlfSLkQxs6M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85NC9OYXJ1dG9D/b3ZlclRhbmtvYm9u/MS5qcGcvNTEycHgt/TmFydXRvQ292ZXJU/YW5rb2JvbjEuanBn'),
        ('Demon Slayer: Kimetsu no Yaiba', 'Koyoharu Gotouge', 5, 205, ''),
        ('Bleach', 'Tite Kubo', 4, 700, ''),
        ('Bakuman', 'Tsugumi Ohba', 4, 176, ''),
        ('Spy x Family', 'Tatsuya Endo', 5, 90, ''),
        ('Tokyo Ghoul', 'Sui Ishida', 4, 300, ''),
        ('Vagabond', 'Takehiko Inoue', 5, 330, ''),
        ('Haikyu!!', 'Haruichi Furudate', 4, 402, ''),
        ('Blue Lock', 'Muneyuki Kaneshiro', 5, 105, ''),
        ('Fairy Tail', 'Hiro Mashima', 4, 545, ''),
        ('Rurouni Kenshin', 'Nobuhiro Watsuki', 4, 255, ''),
        ('Berserk', 'Kentaro Miura', 5, 364, ''),
        ('Detective Conan', 'Gosho Aoyama', 5, 1020, ''),
        ('Sakamoto Days', 'Yuto Suzuki', 4, 80, ''),
        ('Dandadan', 'Yukinobu Tatsu', 4, 50, ''),
        ('Blue Box', 'Kouji Miura', 4, 57, ''),
        ('Hunter x Hunter', 'Yoshihiro Togashi', 5, 392, ''),
        ('The Promised Neverland', 'Kaiu Shirai', 4, 180, ''),
        ('Parasyte', 'Hitoshi Iwaaki', 4, 321, '');
`
const connectionString = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DBPORT}/${process.env.DB}`


async function main(){

    const client = new Client({
        connectionString: connectionString,
        ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

}

//main();
