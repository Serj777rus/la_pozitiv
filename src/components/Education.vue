<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu @openVidget="toggle"></HeadMenu>
    <div class="education_main">
        <div class="education_div">
            <h3>Направления обучения</h3>
            <div class="line"></div>
            <div class="education_cards">
                <div class="education_card" v-for="card in educations" :key="card.id" @click="transferId(card)">
                    <img :src="`${urlmedia}` + card.attributes.image.data.attributes.formats.medium.url">
                    <h3>{{ card.attributes.name }}</h3>
                </div>
            </div>
        </div>
    </div>
    <PopUp v-show="isShowPopUp" @closePop="closePop"></PopUp>
    <Footer></Footer>
    <Vidget ref="vidgetComponent"></Vidget>
    </template>

<script>
    import HeadMenu from '@/components/UI_components/HeadMenu.vue'
    import Footer from './UI_components/Footer.vue';
    import PopUp from './UI_components/PopUp.vue';
    import axios from 'axios';
import Vidget from './UI_components/Vidget.vue';
    export default {
        components: {
            HeadMenu,
            Footer,
            PopUp,
            Vidget
        },
        data() {
            return {
                educations: [],
                isShowPopUp: false,
                url: process.env.VUE_APP_SERVER,
                urlmedia: 'https://admin.la-pozitiv.ru'
            }
        },
        methods: {
            async getEducation() {
                try {
                    const response = await axios.get(`${this.url}/geteducation`);
                    if (response.status == 200) {
                        console.log(response.data.data);
                        this.educations = response.data.data;
                    } else {
                        // console.log(response.data);
                    }
                }
                catch(error) {
                    console.log(`Ошибка ${error}`)
                }
            },
            transferId(card) {
                if (card) {
                    this.$store.dispatch('updateCard', card)
                    console.log('Transferring card:', card);
                    this.$router.push({ name: 'lesson' });
                } else {
                    console.error('card is undefined');
                }
            },
            toggle() {
                this.$refs.vidgetComponent.toggleActive();
            }
        },
        mounted() {
            this.getEducation();
        }
        
    }
</script>

<style scoped>
    .education_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    .education_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
    }
    .education_div h3 {
        font-size: 48px;
        text-align: center;
        margin-bottom: 40px;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #fff;
        margin-bottom: 40px;
    }
    .education_cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        row-gap: 40px;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .education_card {
        width: 380px;
        height: 180px;
        display: flex;
        position: relative;
        border-radius: 24px;
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .education_card img {
        width: 100%;
        object-fit: cover;
        transition: all 300ms ease;
    }
    .education_card h3 {
        line-height: 100%;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .education_card img:hover {
        transform: scale(1.2);
    }
    @media all and (max-width: 430px) {
    .education_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        padding: 0px 10px;
        box-sizing: border-box;
    }
    .education_div {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .education_div h3 {
        font-size: 32px;
        text-align: center;
        margin-bottom: 40px;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #fff;
        margin-bottom: 40px;
    }
    .education_cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: auto;
        row-gap: 32px;
        justify-content: center;
        box-sizing: border-box;
    }
    .education_card {
        width: 100%;
        height: 180px;
        display: flex;
        position: relative;
        border-radius: 24px;
        box-sizing: border-box;
        overflow: hidden;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .education_card img {
        width: 100%;
        object-fit: cover;
        transition: all 300ms ease;
    }
    h3 {
        line-height: 100%;
        font-size: 48px;

    }
    .education_card img:hover {
        transform: scale(1.2);
    }
    }
</style>