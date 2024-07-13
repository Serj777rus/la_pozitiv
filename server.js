require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');

const hostname = '192.168.0.102';
const PORT = 3000;
const app = express();
const server = http.createServer(app);

let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.POST_USER,
        pass: process.env.POST_PASS
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SERVER_APP = process.env.SERVER_APP
app.use(cors({
    credentials: true,
    origin: SERVER_APP
}));

app.get('/testroute', async (req, res) => {
    const url = `https://supportive-heart-1886e94650.strapiapp.com/api/posts?populate=*`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error.response ? error.response.data : error.message);
        res.status(500).send('An error occurred while fetching data.');
    }
});

app.get('/getprice', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/prices';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        // console.log(response.data);
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
app.get('/getreviws', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/reviews?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.get('/getteachers', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/teachers?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.get('/getphotosvideos', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/photosvideos?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        // console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.get('/geteducation', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/educations?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        // console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.get('/getaboutmedia', async(req, res) => {
    const url = 'https://supportive-heart-1886e94650.strapiapp.com/api/aboutschoolmedias?populate=*';
    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
        // console.log(response.data);
    } catch (error) {
        console.error(error)
    }
})

app.post('/sendform', async (req, res) => {
    try {
        const { name, phone, age, education } = req.body;
        if (!name || !phone || !age || !education) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }
        let sended = await transporter.sendMail({
            from: '"Сайт Ля Позитив" <gvsergey89@hotmail.com>',
            to: 'gvsergey89@gmail.com',
            subject: 'Заявка с сайта',
            text: `Имя: ${name}\nТелефон: ${phone}\nВозраст: ${age}\nПрограмма обучения: ${education}`
        });
        if (sended) {
            res.status(200).json({ message: 'Письмо успешно отправлено' });
            console.log('письмо ушло');
        } else {
            res.status(500).json({ message: 'Ошибка при отправке письма' });
            console.log('что-то пошло не так');
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
        console.error(error);
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Сервер запущен на ${hostname} ${PORT}`)
})