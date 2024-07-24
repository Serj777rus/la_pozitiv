require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const { exec } = require('child_process');

const hostname = '192.168.0.102';
const PORT = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const SERVER_APP = process.env.SERVER_APP
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.get('/api/testroute', async (req, res) => {
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
app.get('/getreviews', async (req, res) => {
    const url = 'https://admin.la-pozitiv.ru/api/reviews?populate=*';
    try {
        const response = await axios.get(url);
        // res.status(200).json(response.data);
        // console.log(response.data);
        
        const data = response.data.data;

        for (let el of data) {
            let timeSt = Date.now()
            const outputFilePath = path.join(__dirname, 'posters', `${timeSt}.jpg`);
            const videoUrl = `https://admin.la-pozitiv.ru${el.attributes.video.data.attributes.url}`;
            const command = `ffmpeg -i "${videoUrl}" -ss 00:00:05 -vframes 1 -q:v 1 "${outputFilePath}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Ошибка при извлечении кадра: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                }
                console.log(`Кадр сохранен как: ${outputFilePath}`);
            });
            el.poster = outputFilePath;
        }
        // console.log(data)
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении отзывов' });
    }
});

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
            let fields = {
                name: name,
                phone: phone,
                note: `Возраст: ${age}, направление обучения ${education}`
            }
            const response = await axios.post(`https://lapozitiv.s20.online/api/1/lead/create?token=${process.env.ALFA_TOKEN}`, fields);
            if (response) {
                res.status(200).json({message: 'Данные успешно отправлены'})
                console.log('ok')
            }
            else {
                console.log(response.data)
            }
        } catch (error) {
            res.status(500).json({ message: 'Ошибка сервера' });
            console.error(error);
        }
    });

server.listen(PORT, hostname, () => {
    console.log(`Сервер запущен на ${hostname} ${PORT}`)
})