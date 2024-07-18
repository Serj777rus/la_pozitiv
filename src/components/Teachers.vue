<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu></HeadMenu>
    <div class="teachers_main">
        <div class="teachers_div">
            <h2>Наши преподаватели</h2>
            <div class="teachers_back">
                <img src="../assets/photos/teachers/fon.png">
            </div>
            <div class="line"></div>
            <div class="teachers_block" :class="{nonactive: isShowCard !== null}">
                <div class="teacher_card" v-for="card in teachers" :key="card.id">
                    <div class="back_grad">
                        <img :src="card.attributes.image.data.attributes.url">
                    </div>
                    <div class="about_teacher">
                        <div class="names">{{ card.attributes.name }} {{ card.attributes.lastname }}</div>
                        <h3>{{ card.attributes.study }}</h3>
                    </div>
                    <Button @click="showTeachCard(card.id)"><slot>Подробнее</slot></Button>
                </div>
            </div>
        </div>
    </div>
    <div class="teacher_modal" :class="{active: isShowCard == morecards.id}" v-for="morecards in teachers" :key="morecards.id">
        <div class="teacher_modal_div">
            <div class="card_left_side">
                <div class="teacher_card_big">
                    <div class="back_grad_big">
                        <img :src="morecards.attributes.image.data.attributes.url">
                    </div>
                    <p>{{ morecards.attributes.article }}</p>
                    <div class="about_teacher_big">
                        <p>Имя: <span>{{ morecards.attributes.name }} {{ morecards.attributes.lastname }}</span></p>
                        <p>Возраст: <span>{{ morecards.attributes.age }}</span></p>
                        <p>Специализация: <span>{{ morecards.attributes.study }}</span></p>
                    </div>
                    <div class="socials">
                            <a :href="morecards.attributes.inst" target="_blank"><img src="@/assets/photos/teachers/instagram.svg"></a>
                            <a :href="morecards.attributes.vk" target="_blank"><img src="@/assets/photos/teachers/vk.svg"></a>
                    </div>
                </div>
            </div>
            <div class="card_right_side">
                <div class="right_up">
                    <h4>Обо мне:</h4>
                    <p>{{ morecards.attributes.bio }}</p>
                </div>
                <div class="right_down">
                    <div class="right_down_left">
                        <div class="skills">
                            <p>Достижения</p>
                            <ul>
                                <li v-for="skill in morecards.attributes.skills" :key="skill">{{ skill.skill }}</li>
                            </ul>
                        </div>
                        <div class="skillses">
                            <p>Skills</p>
                            <ul>
                                <li v-for="dost in morecards.attributes.dost" :key="dost">{{ dost.dostigenia }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="right_down_right">
                        <p>Видеовизитка</p>
                        <video :src="morecards.attributes?.video?.data?.attributes?.url || 'google.com'" controls></video>
                    </div>
                </div>
            </div>
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #000; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" @click="closeCard" />
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import axios from 'axios';
import Button from './UI_components/Button.vue';
import Footer from './UI_components/Footer.vue';
import HeadMenu from './UI_components/HeadMenu.vue';

export default {
  components: {
    HeadMenu,
    Footer,
    Button
  },
  data() {
    return {
      teachers: [],
      isShowCard: null,
      url: process.env.VUE_APP_SERVER
    };
  },
  methods: {
    showTeachCard(card) {
    this.isShowCard = card;
    console.log(this.teachcard);
    },
    closeCard() {
      this.isShowCard = null;
    },
    async getTeachersData() {
      try {
        const response = await axios.get(`${this.url}/getteachers`);
        if (response.status == 200) {
          this.teachers = response.data.data;
          console.log(response.data.data);
        } else {
            console.log(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTeachersData();
  }
};
</script>

<style scoped>
.teachers_main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    transition: all 500ms ease;
    z-index: 999;
}
.nonactive {
    position: absolute;
    opacity: 0;
    z-index: -1;
}
.teachers_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
}
.teachers_div h2 {
    font-size: 48px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 40px;
}
.teachers_back {
    width: 100%;
    background: linear-gradient(90deg, #9f6cd3,#5ca1cb,#2bc7c4) no-repeat;;
    height: 500px;
    border-radius: 32px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.teachers_back img {
    width: 100%;
    max-height: 480px;
    object-fit: cover;
}
.line {
    width: 100%;
    height: 1px;
    background: #fff;
    margin-bottom: 96px;
}
.teachers_block {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    row-gap: 74px;
}
.teacher_card {
    width: 370px;
    height: 550px;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    padding: 35px;
    box-shadow: 10px 10px 16px 0px rgba(47, 46, 46, .4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.back_grad {
    width: 300px;
    height: 330px;
    border-radius: 4px;
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    position: relative;
}
.back_grad img {
    position: absolute;
    height: 400px;
    object-fit: contain;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.about_teacher {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.names {
    font-size: 24px;
    font-weight: 700;
    color: #494949;
    text-align: center;
}
.about_teacher h3 {
    font-size: 16px;
    font-weight: 400;
    color: #494949;
    text-align: center;
}
.teacher_modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    color: #333;
    transition: all 500ms ease;
}
.active {
    opacity: 1;
    z-index: 999;
    position: relative;
}
.teacher_modal_div {
    width: 1200px;
    /* height: 700px; */
    position: relative;
    background: rgba(255, 255, 255);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 8px 8px 16px rgba(255, 255, 255, .3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 80px;
    box-sizing: border-box;
}
.card_left_side {
    display: flex;
}
.teacher_card_big {
    width: 460px;
    /* height: 660px; */
    height: fit-content;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    padding: 40px;
    box-shadow: 10px 10px 16px 0px rgba(47, 46, 46, .4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}
.teacher_card_big p {
    font-size: 16px;
    text-align: center;
    font-weight: 200;
}
.back_grad_big {
    width: 380px;
    height: 320px;
    border-radius: 4px;
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    position: relative;
    z-index: 998;
}
.back_grad_big img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 120%;
    z-index: 999;
}
.about_teacher_big {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
}
.about_teacher_big p {
    font-size: 16px;
    font-weight: 400;
    text-align: start
}
.about_teacher_big span {
    font-size: 16px;
    font-weight: 700;
}
.socials {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px
}
.socials img {
    width: 48px;
    object-fit: cover;
}
.card_right_side {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
}
.right_up {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.right_up h4 {
    font-size: 32px;
    font-weight: 700;
    text-align: start;
}
.right_up p {
    font-size: 16px;
    font-weight: 200;
    text-align: start;
}
.right_down {
    display: flex;
    flex-direction: row;
    gap: 120px;
    overflow: hidden;
}
.right_down_left {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 60px;
    overflow-y: scroll;
}
.right_down_left p {
    font-size: 32px;
    font-weight: 700;
    text-align: start;
}
.right_down_left ul li {
    font-size: 16px;
    font-weight: 400;
    list-style-position: inside;
}
.right_down_right {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.right_down_right p {
    font-size: 32px;
    font-weight: 700;
    line-height: 100%;
}
.right_down_right video {
    width: 186px;
    border-radius: 16px;
    object-fit: contain;
}
@media all and (max-width: 430px) {
    .teachers_main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    padding: 0px 10px;
    box-sizing: border-box;
    transition: all 500ms ease;
    z-index: 999;
}
.nonactive {
    position: absolute;
    opacity: 0;
    z-index: -1;
}
.teachers_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.teachers_div h2 {
    font-size: 32px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 40px;
}
.teachers_back {
    width: 100%;
    background: url('@/assets/photos/teachers/fon.png') 100% 100% / contain no-repeat,
                #E7E4E4;
    height: 216px;
    border-radius: 32px;
    margin-bottom: 40px;
    display: none;
}
.line {
    width: 100%;
    height: 1px;
    background: #fff;
    margin-bottom: 64px;
}
.teachers_block {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}
.teacher_card {
    width: 100%;
    height: 550px;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    padding: 35px;
    box-shadow: 10px 10px 16px 0px rgba(47, 46, 46, .4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.back_grad {
    width: 300px;
    height: 330px;
    border-radius: 4px;
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    position: relative;
}
.back_grad img {
    position: absolute;
    height: 400px;
    object-fit: contain;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.about_teacher {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.names {
    font-size: 24px;
    font-weight: 700;
    color: #494949;
    text-align: center;
}
.about_teacher h3 {
    font-size: 16px;
    font-weight: 400;
    color: #494949;
    text-align: center;
}
.teacher_modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    color: #333;
    transition: all 500ms ease;
}
.active {
    opacity: 1;
    z-index: 999;
    position: relative;
}
.teacher_modal_div {
    width: 100%;
    /* height: 700px; */
    position: relative;
    background: rgba(255, 255, 255);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 8px 8px 16px rgba(255, 255, 255, .3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    box-sizing: border-box;
}
.card_left_side {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 10px;
}
.teacher_card_big {
    width: 100%;
    height: fit-content;
    background-color: #fff;
    border-radius: 4px;
    border: none;
    padding: 24px;
    box-shadow: 10px 10px 16px 0px rgba(47, 46, 46, .4);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.teacher_card_big p {
    font-size: 12px;
    text-align: center;
    font-weight: 200;
}
.back_grad_big {
    width: 100%;
    height: 320px;
    border-radius: 4px;
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    position: relative;
    z-index: 998;
}
.back_grad_big img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 120%;
    z-index: 999;
}
.about_teacher_big {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
}
.about_teacher_big p {
    font-size: 12px;
    font-weight: 400;
    text-align: start
}
.about_teacher_big span {
    font-size: 12px;
    font-weight: 700;
}
.socials {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px
}
.socials img {
    width: 40px;
    object-fit: contain;
}
.card_right_side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
}
.right_up {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.right_up h4 {
    font-size: 24px;
    font-weight: 700;
    text-align: start;
}
.right_up p {
    font-size: 16px;
    font-weight: 200;
    text-align: start;
}
.right_down {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
}
.right_down_left {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
}
.right_down_left p {
    font-size: 24px;
    font-weight: 700;
    text-align: start;
}
.right_down_left ul li {
    font-size: 16px;
    font-weight: 200;
    list-style-position: inside;
}
.right_down_right {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
}
.right_down_right p {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    text-align: start;
}
.right_down_right video {
    border-radius: 16px;
    object-fit: contain;
}
}
</style>