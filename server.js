require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const nodemailer = require('nodemailer');

const hostname = '192.168.0.102';
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

app.use(cors({
    credentials: true,
    origin: 'http://192.168.0.102:8080'
}));

const RANGE = 'Лист1';
const SPREADSHEET = process.env.SPREADSHEET_ID;
const APIKEY = process.env.GOOGLE_API;

app.get('/testroute', async (req, res) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET}/values/${RANGE}?key=${APIKEY}`;

    try {
        const response = await axios.get(url);
        const data = response.data.values;

        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(200).json({ message: 'No data found.' });
        }
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error.response ? error.response.data : error.message);
        res.status(500).send('An error occurred while fetching data.');
    }
});

// app.get('/testroute', (req, res) => {
//     console.log(`запроc дошел до сервера`);
//         return res.status(200).json('окей')
// })

server.listen(PORT, hostname, () => {
    console.log(`Сервер запущен на ${hostname} ${PORT}`)
})