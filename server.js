require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const nodemailer = require('nodemailer');

// const hostname = '192.168.0.102';
const hostname = '192.168.200.69';
const PORT = 3000;
const app = express();
const server = http.createServer(app);

// let transporter = nodemailer.createTransport({
//     host: 'smtp.office365.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.POST_USER,
//         pass: process.env.POST_PASS
//     }
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SERVER_APP = process.env.SERVER_APP
app.use(cors({
    credentials: true,
    // origin: 'http://192.168.0.102:8080'
    origin: SERVER_APP
}));

const RANGE = 'Посты';
const SPREADSHEET = process.env.SPREADSHEET_ID;
const APIKEY = process.env.GOOGLE_API;
const ALFA_TOKEN = process.env.ALFA_TOKEN;

app.get('/testroute', async (req, res) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET}/values/${RANGE}?key=${APIKEY}`;

    try {
        const response = await axios.get(url);
        const rows = response.data.values;

        if (rows.length) {
            const keys = rows[0];
            const data = rows.slice(1).map(row => {
                let obj = {};
                row.forEach((value, index) => {
                    obj[keys[index]] = value;
                });
                return obj;
            });
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: 'No data found.' });
        }
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error.response ? error.response.data : error.message);
        res.status(500).send('An error occurred while fetching data.');
    }
});

app.get('/getprice', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/prices?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.get('/getquest', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/questansws';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.post('/sendform', async(req, res) => {
    const url = `https://lapozitiv.s20.online/api/1/lead/create?token=${ALFA_TOKEN}`;
    const { name, phone } = req.body;
    const lead = {
        name: name,
        phone: phone
    }
    try {
        const response = await axios.post(url, lead);
        res.status(201).json({message: 'Данные отправлены', data: response.data})
    }
    catch (error) {
        console.error('Ошибка отправки', error);
        res.status(500).json({message: 'Ошибка сохранения'})
    }
})

// app.get('/testroute', (req, res) => {
//     console.log(`запроc дошел до сервера`);
//         return res.status(200).json('окей')
// })

server.listen(PORT, hostname, () => {
    console.log(`Сервер запущен на ${hostname} ${PORT}`)
})