<!-- eslint-disable vue/multi-word-component-names -->
<template>
<HeadMenu @openVidget="toggle"></HeadMenu>
    <div class="lesson_div">
        <div class="lesson_main">
            <div class="photo_name_block">
                <div class="photo_block">
                    <img :src="`${this.urlmedia}` + post.attributes.bigimage.data.attributes.url">
                </div>
                <div class="name_desc_block">
                    <h3>{{ post.attributes.name }}</h3>
                    <h4>{{ post.attributes.description_lesson }}</h4>
                </div>
            </div>
            <div class="line"></div>
            <div class="napravlenia_block">
                <p>Основные направления в студии "Ля Позитив":</p>
                    <div class="napr_block">
                        <div class="napr_card" v-for="napr in post.attributes.napravlenia" :key="napr.id">
                            <div class="card_desc">
                                <h3>{{ napr.name }}</h3>
                                <blockquote class='blockquote-7'>{{ napr.article }}</blockquote>
                                <h4>Кому подойдет? <span>{{ napr.forwho }}</span></h4>
                                <h5>Особенности направления: 
                                    <ul>
                                        <li v-for="list in napr.osobennosti" :key="list.id">{{ list.text }}</li>
                                    </ul>
                                </h5>
                            </div>
                            <img :src="`${this.urlmedia}` + napr.img.data.attributes.url">
                        </div>
                    </div>

            </div>
            <div class="naviki">
                <p>Какие навыки вы приобретете</p>
                <div class="all_skills">
                    <div class="card_skill" v-for="skill in post.attributes.navik" :key="skill.id">
                        <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B; font-size: 32px;" />
                        <div class="skill_txt">
                            <h3>{{ skill.name }}</h3>
                            <h4>{{ skill.description }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="probnoe">
                <p>Что вас ждет на пробном занятии?</p>
                <div class="all_probs">
                    <div class="card_prob" v-for="probs in post.attributes.proba" :key="probs.id">
                        <img src="../assets/photos/lesson/mic.png">
                        <div class="probs_text">
                            <h3>{{ probs.name }}</h3>
                            <div class="probs_line"></div>
                            <h4>{{ probs.description }}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons_booking">
                <p>Первый пробный урок 700₽</p>
                <span>Оставьте заявку на консультацию или запишитесь на пробный урок</span>
                <div class="buttons">
                    <Button @click="showPop"><slot>Консультация</slot></Button>
                    <Button><slot>Запись</slot></Button>
                </div>
            </div>
        </div>
    </div>
<PopUp v-show="isShowPopUp" @closePop="closePop"></PopUp>
<Footer></Footer>
<Vidget ref="vidgetComponent"></Vidget>
</template>

<script>
import HeadMenu from '@/components/UI_components/HeadMenu.vue';
import Footer from './UI_components/Footer.vue';
import PopUp from './UI_components/PopUp.vue';
import Vidget from './UI_components/Vidget.vue';
import Button from './UI_components/Button.vue';

export default {
  components: {
    HeadMenu,
    Footer,
    PopUp,
    Vidget,
    Button
  },
  data() {
    return {
      url: process.env.VUE_APP_SERVER,
      urlmedia: 'https://admin.la-pozitiv.ru',
      post: null,
      isShowPopUp: false
    };
  },
  computed: {
    card() {
        return this.$store.getters.getCard;
    }
  },
  watch: {
    card(newCard) {
      this.post = newCard;
    }
  },
created() {
    if (this.card) {
        this.post = this.card;
        console.log(this.post);
    } else {
        console.error('не определяется')
    }
  },
  methods: {
    showPop() {
                this.isShowPopUp = true
            },
            closePop() {
                this.isShowPopUp = false
            },
            toggle() {
                this.$refs.vidgetComponent.toggleActive();
            }
  }
};
</script>

<style scoped>
    .lesson_div {
        width: 100%;
        box-sizing: border-box;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .lesson_main {
        width: 1200px;
        display: flex;
        flex-direction: column;
    }
    .photo_name_block {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .photo_block {
        width: 500px;
        height: 500px;
        border-radius: 50%;
        position: relative;
        display: flex;
        overflow: hidden;
        background: #337AB7;
        border: 2px solid #fff;
        box-sizing: border-box;
    }
    .photo_block img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 500px;
    }
    .name_desc_block {
        width: 500px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .name_desc_block h3 {
        font-size: 48px;
        line-height: 100%;
        font-weight: 900;
    }
    .name_desc_block h4 {
        font-weight: 400;
    }
    .line {
        width: 100%;
        box-sizing: border-box;
        height: 1px;
        background: #fff;
        margin-top: 40px;
    }
    .napravlenia_block {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 80px;
    }
    .napravlenia_block p {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 80px;
        text-align: center;
    }
    .napr_block {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* gap: 80px; */
    }
    .napr_card {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 80px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding: 40px 0px;
    }
    .napr_card:nth-child(even) {
        flex-direction: row-reverse;
    }
    .napr_card img {
        width: 550px;
        object-fit: cover;
        border-radius: 24px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .card_desc {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 550px;
        box-sizing: border-box;
    }
    .card_desc h3 {
        font-size: 32px;
        line-height: 100%;
        font-weight: 700;
        text-align: center;
    }
    .blockquote-7 {
        border: 2px solid #337AB7;
        font-size: 16px;
        font-style: italic;
        margin: 16px 31px 31px 16px;
        padding: 16px 24px;
        position: relative;
        box-shadow: 15px 15px 0 0 #337AB7;  
    }
    .blockquote-7 cite {
        color: #337AB7;
        font-size: 15px;
        padding-top: 10px;
        display: block;
        text-align: right;
    }
    .card_desc h4 {
        font-size: 20px;
    }
    .card_desc h4 span {
        font-size: 20px;
        box-sizing: border-box;
        padding: 8px;
        background: #337AB7;
        /* color: #337AB7; */
        border-radius: 12px;
    }
    .card_desc h5 {
        font-size: 20px;
        margin-top: 20px;
    }
    .card_desc ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 12px;
    }
    .card_desc ul li {
        font-size: 16px;
        box-sizing: border-box;
        padding: 4px 16px;
        border-radius: 12px;
        background: #B8F083;
        color: #337AB7;
        list-style-type: none;
    }
    .naviki {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }
    .naviki p {
        font-size: 48px;
        font-weight: 700;
        line-height: 100%;
        text-align: center;
    }
    .all_skills {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 24px;
        box-sizing: border-box;
        margin-top: 32px;
    }
    .card_skill {
        box-sizing: border-box;
        width: 260px;
        padding: 12px;
        border-radius: 16px;
        background: rgba(0, 0, 0, .7);
        display: flex;
        flex-direction: column;
        gap: 12px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .skill_txt {
        display: flex;
        flex-direction: column;
        gap: 16px
    }
    .skill_txt h3 {
        font-size: 20px;
        text-align: center;
    }
    .skill_txt h4 {
        font-size: 16px;
        font-weight: 300;
    }
    .probnoe {
        display: flex;
        margin-top: 80px;
        flex-direction: column;
        width: 100%;
    }
    .probnoe p {
        font-size: 48px;
        font-weight: 700;
        text-align: center;
    }
    .all_probs {
        width: 100%;
        display: flex;
        flex-direction: row;
        /* justify-content: space-evenly; */
        gap: 4px;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    .card_prob {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 290px;
        background: rgba(0, 0, 0, .3);
        padding: 12px;
        box-sizing: border-box;
        border-radius: 12px;

    }
    .card_prob img {
        width: 100px;
        object-fit: cover;
    }
    .probs_text {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .probs_text h3 {
        font-size: 28px;
        font-weight: 900;
    }
    .probs_line {
        width: 100%;
        height: 4px;
        background: #fff;

    }
    .probs_text h4 {
        font-weight: 300;
        font-size: 16px;
    }
    .buttons_booking {
        width: 100%;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .buttons_booking p {
        font-size: 48px;
        font-weight: 900;
        text-align: center;
        line-height: 100%;
    }
    .buttons_booking span {
        text-align: center;
        font-size: 32px;
        line-height: 100%;
    }
    .buttons {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 24px;
        margin-top: 32px;
    }
    @media all and (max-width: 430px) {
    .lesson_div {
        width: 100%;
        box-sizing: border-box;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
    }
    .lesson_main {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .photo_name_block {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    .photo_block {
        width: 100%;
        height: 0;
        padding-top: 100%;
        border-radius: 50%;
        position: relative;
        display: flex;
        overflow: hidden;
        background: #337AB7;
        border: 2px solid #fff;
        box-sizing: border-box;
    }
    .photo_block img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        object-fit: cover;
    }
    .name_desc_block {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .name_desc_block h3 {
        font-size: 48px;
        line-height: 100%;
        font-weight: 900;
        text-align: center;
    }
    .name_desc_block h4 {
        font-weight: 400;
        text-align: justify;
    }
    .line {
        width: 100%;
        box-sizing: border-box;
        height: 1px;
        background: #fff;
        margin-top: 40px;
    }
    .napravlenia_block {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 40px;
    }
    .napravlenia_block p {
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 80px;
        text-align: center;
    }
    .napr_block {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* gap: 80px; */
    }
    .napr_card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        padding: 40px 0px;
    }
    .napr_card:nth-child(even) {
        flex-direction: column;
    }
    .napr_card img {
        width: 100%;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .card_desc {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;
    }
    .card_desc h3 {
        font-size: 32px;
        line-height: 100%;
        font-weight: 700;
        text-align: center;
    }
    .blockquote-7 {
        border: 2px solid #337AB7;
        font-size: 16px;
        font-style: italic;
        margin: 16px 31px 31px 16px;
        padding: 16px 24px;
        position: relative;
        box-shadow: 15px 15px 0 0 #337AB7;  
    }
    .blockquote-7 cite {
        color: #337AB7;
        font-size: 15px;
        padding-top: 10px;
        display: block;
        text-align: right;
    }
    .card_desc h4 {
        font-size: 20px;
    }
    .card_desc h4 span {
        font-size: 20px;
        box-sizing: border-box;
        padding: 8px;
        background: #337AB7;
        /* color: #337AB7; */
        border-radius: 12px;
    }
    .card_desc h5 {
        font-size: 20px;
        margin-top: 20px;
    }
    .card_desc ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 12px;
    }
    .card_desc ul li {
        font-size: 12px;
        box-sizing: border-box;
        padding: 4px 16px;
        border-radius: 12px;
        background: #B8F083;
        color: #337AB7;
        list-style-type: none;
    }
    .naviki {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 80px;
    }
    .naviki p {
        font-size: 32px;
        font-weight: 900;
        line-height: 100%;
        text-align: center;
    }
    .all_skills {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 24px;
        box-sizing: border-box;
        margin-top: 32px;
    }
    .card_skill {
        box-sizing: border-box;
        width: 260px;
        padding: 12px;
        border-radius: 16px;
        background: rgba(0, 0, 0, .7);
        display: flex;
        flex-direction: column;
        gap: 12px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
    .skill_txt {
        display: flex;
        flex-direction: column;
        gap: 16px
    }
    .skill_txt h3 {
        font-size: 20px;
        text-align: center;
    }
    .skill_txt h4 {
        font-size: 16px;
        font-weight: 300;
    }
    .probnoe {
        display: flex;
        margin-top: 80px;
        flex-direction: column;
        width: 100%;
    }
    .probnoe p {
        font-size: 32px;
        font-weight: 900;
        text-align: center;
        line-height: 100%;
    }
    .all_probs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-evenly; */
        gap: 8px;
        margin-top: 40px;
    }
    .card_prob {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        background: rgba(0, 0, 0, .3);
        padding: 12px;
        box-sizing: border-box;
        border-radius: 12px;

    }
    .card_prob img {
        width: 100px;
        object-fit: cover;
    }
    .probs_text {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .probs_text h3 {
        font-size: 28px;
        font-weight: 900;
    }
    .probs_line {
        width: 100%;
        height: 4px;
        background: #fff;

    }
    .probs_text h4 {
        font-weight: 300;
        font-size: 16px;
    }
    .buttons_booking {
        width: 100%;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .buttons_booking p {
        font-size: 40px;
        font-weight: 900;
        text-align: center;
        line-height: 100%;
    }
    .buttons_booking span {
        text-align: center;
        font-size: 20px;
        line-height: 100%;
    }
    .buttons {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        margin-top: 32px;
    }
    }
</style>