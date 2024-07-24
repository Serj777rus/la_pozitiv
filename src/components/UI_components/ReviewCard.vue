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
            :poster="`${urlmedia}${video.poster}`"
            controls
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reviews: [],
      server: process.env.VUE_APP_SERVER,
      urlmedia: 'https://admin.la-pozitiv.ru',
    };
  },
  methods: {
    async getReviews() {
      try {
        const response = await axios.get(`${this.server}/getreviws`);
        if (response.status === 200) {
          // this.reviews = response.data.data;
          this.reviews = response.data;
          console.log(this.reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    },
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
  