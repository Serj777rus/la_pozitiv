<template>
  <div class="reviews">
    <div class="reviews_div">
      <h2>Отзывы наших учеников</h2>
      <div class="all_cards">
        <div class="review_card">
          <video
            v-for="video in reviews"
            :key="video.id"
            :src="`${urlmedia}${video.attributes.video.data.attributes.url}`"
            :poster="video.poster"
            controls
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { FFmpeg } from '@ffmpeg/ffmpeg';
//   import { fetchFile } from '@ffmpeg/util';

export default {
  data() {
    return {
      reviews: [],
      server: process.env.VUE_APP_SERVER,
      urlmedia: 'https://admin.la-pozitiv.ru',
      ffmpeg: null,
    };
  },
  methods: {
    async getReviews() {
      try {
        //const response = await axios.get(`${this.server}/getreviws`);
        const response = await axios.get('https://admin.la-pozitiv.ru/api/reviews?populate=*');
        if (response.status === 200) {
          this.reviews = response.data.data;
          console.log(this.reviews);
          // await this.generatePosters();
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    },
//     async generatePosters() {
//   const ffmpeg = new FFmpeg({ log: true });
//   await ffmpeg.load();
//   console.log('FFmpeg loaded');

//   for (let review of this.reviews) {
//     try {
//       const url = `${this.urlmedia}${review.attributes.video.data.attributes.url}`;
//       console.log(`Fetching video from ${url}`);
//       const videoResponse = await fetchFile(url);
//       console.log('Video fetched, length:', videoResponse.byteLength);

//       if (videoResponse.byteLength === 0) {
//         console.error('Error: Video file is empty.');
//         continue;
//       }

//       await ffmpeg.writeFile('input.mp4', new Uint8Array(videoResponse));
//       console.log('Video written to virtual filesystem');

//       const writtenFile = await ffmpeg.readFile('input.mp4');
//       console.log('Written file length:', writtenFile.byteLength);
//       console.log('Written file:', writtenFile);

//       if (writtenFile.byteLength === 0) {
//         console.error('Error: Video file was not written correctly.');
//         continue;
//       }

//       // Используем команду для захвата одного изображения на 2-й секунде
//       let command = '-i input.mp4 -ss 00:00:02.000 -vframes 1 frame.jpeg';
//       console.log(`Executing FFmpeg command: ${command}`);
//       let result = await ffmpeg.exec(...command.split(' '));
//       console.log('Image extraction result:', result);

//       // Захват ошибок FFmpeg
//       const errorOutput = await ffmpeg.getErrorOutput();
//       if (errorOutput.length > 0) {
//         console.error('FFmpeg error output:', new TextDecoder().decode(errorOutput));
//       }

//       if (result !== 0) {
//         console.error('FFmpeg image extraction failed with result code:', result);
//         continue;
//       }

//       // Чтение созданного изображения
//       const imageData = await ffmpeg.readFile('frame.jpeg');
//       console.log('Image data type:', typeof imageData);
//       console.log('Image data length:', imageData.byteLength);
//       console.log('Image data buffer length:', imageData.buffer.byteLength);

//       if (imageData.byteLength === 0 || imageData.buffer.byteLength === 0) {
//         throw new Error('Generated image data is empty');
//       }

//       const imgBlob = new Blob([imageData.buffer], { type: 'image/png' });
//       const imgUrl = URL.createObjectURL(imgBlob);

//       review.poster = imgUrl;
//       console.log('Poster URL:', imgUrl);

//       // Удаление временных файлов
//       await ffmpeg.deleteFile('input.mp4');
//       await ffmpeg.deleteFile('frame.jpeg');
//     } catch (error) {
//       console.error('Error processing review:', review, error);
//     }
//   }
// }
  },
  created() {
    this.getReviews();
  },
};
</script>
  
  <style scoped>
  .reviews {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    overflow: hidden;
  }
  .reviews_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .reviews_div h2 {
    font-size: 48px;
    font-weight: 900;
  }
  .all_cards {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 32px;
    padding: 16px 0px;
    overflow: auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  .review_card {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
    scroll-snap-align: start;
  }
  .review_card video {
    width: 500px;
    border-radius: 32px;
    box-shadow: 4px 4px 12px 0px rgba(0, 0, 0, .3);
  }
  @media all and (max-width: 440px) {
    .reviews {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 140px;
      padding: 0px 10px;
    }
    .reviews_div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    .reviews_div h2 {
      font-size: 32px;
      font-weight: 900;
    }
    .all_cards {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      gap: 24px;
      /* overflow: auto; */
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }
    .review_card {
      width: 100%;
      height: auto;
      border-radius: 32px;
      display: flex;
      flex-direction: row;
      gap: 24px;
      box-sizing: border-box;
      scroll-snap-align: start;
    }
    .review_card video {
      width: 320px;
      border-radius: 12px;
    }
  }
  </style>
  