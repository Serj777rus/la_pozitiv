<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu></HeadMenu>
    <div class="price_main">
        <div class="price_div">
            <h2>Цены на услуги</h2>
            <div class="descript_price">
                <h5>Пение, вокал относятся к тем навыкам, которым лучше учиться с самого детства. Если Ваш ребенок любит петь, разумно будет отдать его в вокальный кружок или студию – кто знает, возможно, именно он в недалеком будущем будет представлять нашу страну на мировой певческой арене! Занятия вокалом благотворно влияют не только на формирование артистической личности ребенка, но и на физическом здоровье! Дыхательные гимнастики для разогрева связок отличная профилактика ОРВИ и др. заболеваний дыхательных путей.</h5>
                <h5>В основе вокального мастерства лежат навыки, которые пригодятся ребенку в повседневной жизни – уверенность в себе, хорошая дикция, способность четко формулировать свои мысли и уметь их преподносить. Если ребенок, обращаясь к публике, обладает хорошо поставленным голосом, выразительной дикцией , его непременно услышат и оценят красоту его голоса!</h5>
            </div>
            <div class="price_tabs">
                <div class="tabs" :class="{ active: isShowPrice ==  tab.clas}" v-for="tab in prices" :key="tab.clas" @click="showPrice(tab.clas)">{{ tab.clas }}</div>
            </div>
            <div class="description_tab" v-for="desc in prices" :key="desc.clas" v-show="isShowPrice == desc.clas">
                <h5>{{ desc.inf }}</h5>
                <p>{{ desc.moreinf }}</p>
            </div>
            <div class="price_card">
                <div class="cards" v-for="price in prices" :key="price.clas" v-show="isShowPrice == price.clas">
                    <div class="card" v-for="category in price.category" :key="category.name">
                        <p>{{ category.utp }}</p>
                        <h3>{{ category.name }}</h3>
                        <span>{{ category.price }}</span>
                        <ul>
                            <li v-for="servise in category.services" :key="servise">{{ servise }}</li>
                        </ul>
                        <button>Купить</button>
                        <img src="@/assets/photos/price/ribbon.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import axios from 'axios';
import Footer from './UI_components/Footer.vue';
import HeadMenu from './UI_components/HeadMenu.vue';

    export default {
        components: {
            HeadMenu,
            Footer
        },
        data() {
            return {
                prices: [{
                    clas: 'Вокал',
                    inf: 'Эстрадный, Джазовый',
                    moreinf: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
                    category: [{
                        name: 'Пробное занятие',
                        price: '700р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Абонемент',
                        price: '14 000р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Разовое занятие',
                        price: '2500р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    }]
                },
                {
                    clas: 'Вокал online',
                    inf: 'Эстрадный, Джазовый',
                    moreinf: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
                    category: [{
                        name: 'Пробное занятие',
                        price: '500р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Абонемент',
                        price: '13 000р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Разовое занятие',
                        price: '2400р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    }]
                },
                {
                    clas: 'Сольфеджио',
                    inf: 'Эстрадный, Джазовый',
                    moreinf: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
                    category: [{
                        name: 'Пробное занятие',
                        price: '800р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Абонемент',
                        price: '15 000р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Разовое занятие',
                        price: '2600р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    }]
                },
                {
                    clas: 'Музыкальная литература',
                    inf: 'Эстрадный, Джазовый',
                    moreinf: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
                    category: [{
                        name: 'Пробное занятие',
                        price: '300р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Абонемент',
                        price: '11 000р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Разовое занятие',
                        price: '2200р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    }]
                },
                {
                    clas: 'Инструменты',
                    inf: 'Эстрадный, Джазовый',
                    moreinf: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
                    category: [{
                        name: 'Пробное занятие',
                        price: '900р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Абонемент',
                        price: '17 000р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    },
                    {
                        name: 'Разовое занятие',
                        price: '2700р',
                        utp: 'Почти даром',
                        services: ['Что входит в занятие №1', 'Что входит в занятие №2', 'Что входит в занятие №3', 'Что входит в занятие №4']
                    }]
                }],
                isShowPrice: 'Вокал'
            }
        },
        methods: {
            showPrice(name) {
                if (this.isShowPrice !== name) {
                    this.isShowPrice = name;
                }
            },
            async getPrice() {
                try {
                    const response = await axios.get('http://192.168.0.102:3000/getprice');
                    if (response) {
                        console.log(response.data)
                    } else {
                        console.log('oshibka');
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },
        mounted() {
            this.getPrice()
        }
    }
</script>

<style scoped>
    .price_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    .price_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
    }
    .price_div h2 {
        font-size: 48px;
        font-weight: 500;
        text-align: center;
    }
    .descript_price {
        margin-top: 40px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
    }
    .descript_price h5 {
        width: 500px;
        text-align: justify;
        font-size: 16px;
        line-height: 100%;
        font-weight: 200;
    }
    .price_tabs {
        padding: 0px 12px;
        height: 64px;
        box-sizing: border-box;
        border-top: 1px solid #FFCEC2;
        border-bottom: 1px solid #FFCEC2;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        box-sizing: border-box;
    }
    .tabs {
        font-size: 24px;
        font-weight: 500;
        line-height: 100%;
        box-sizing: border-box;
        transition: all 160ms ease;
        cursor: pointer;
    }
    .active {
        padding: 6px 20px;
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(10px);
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        border-radius: 16px;
        font-size: 20px;
    }
    .description_tab {
        margin-top: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .description_tab h5 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        line-height: 100%;
    }
    .description_tab p {
        font-size: 16px;
        font-weight: 100;
        text-align: center;
        line-height: 100%;
    }
    .price_card {
        margin-top: 80px;
        display: flex;
    }
    .cards {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .card {
        width: 360px;
        height: 480px;
        box-sizing: border-box;
        padding: 32px;
        position: relative;
        background: linear-gradient(45deg, rgba(26, 26, 26, 0.4) 0%, rgba(55, 64, 132, 0.4) 50%, rgba(130, 40, 114, 0.4) 100%);
        border-radius: 24px;
        box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, .25);
        display: flex;
        flex-direction: column;
    }
    .card img {
        position: absolute;
        top: -38px;
        right: -38px;
    }
    .card p {
        font-size: 16px;
        font-weight: 200;
        line-height: 100%;
        margin-bottom: 12px;
    }
    .card h3 {
        font-size: 32px;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 56px;
    }
    .card span {
        font-size: 48px;
        font-weight: 500;
        line-height: 100%;
    }
    .card ul {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 200;
        list-style-position: inside;
    }
    .card button {
        display: flex;
        padding: 16px 32px;
        background: transparent;
        border-radius: 32px;
        border: 1px solid #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        color: #fff;
        margin-top: auto;
        align-self: center;
        transition: all 200ms ease;
    }
    .card button:hover {
        background: #fff;
        color: #333;
        transform: scale(1.1);
    }
    @media all and (max-width: 430px) {
        * {
    box-sizing: border-box;
    }
    .price_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        padding: 0px 10px;
    }
    .price_div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .price_div h2 {
        font-size: 32px;
        font-weight: 500;
        text-align: center;
    }
    .descript_price {
        margin-top: 40px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .descript_price h5 {
        width: 100%;
        text-align: justify;
        font-size: 12px;
        line-height: 100%;
        font-weight: 200;
    }
    .price_tabs {
        padding: 12px 0px;
        height: auto;
        box-sizing: border-box;
        border-top: 1px solid #707070;
        border-bottom: 1px solid #707070;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 12px;
        align-items: center;
        margin-top: 40px;
        box-sizing: border-box;
    }
    .tabs {
        font-size: 16px;
        font-weight: 500;
        line-height: 100%;
        box-sizing: border-box;
        transition: all 160ms ease;
        cursor: pointer;
    }
    .active {
        padding: 6px 20px;
        border-radius: 16px;
        font-size: 20px;
    }
    .description_tab {
        margin-top: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .description_tab h5 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        line-height: 100%;
    }
    .description_tab p {
        font-size: 16px;
        font-weight: 100;
        text-align: center;
        line-height: 100%;
    }
    .price_card {
        margin-top: 80px;
        display: flex;
    }
    .cards {
        display: flex;
        flex-direction: column;
        gap: 48px;
        width: 100%;
    }
    .card {
        width: 100%;
        height: 480px;
        box-sizing: border-box;
        padding: 32px;
        position: relative;
        border-radius: 24px;
        box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, .25);
        display: flex;
        flex-direction: column;
    }
    .card img {
        position: absolute;
        top: -38px;
        right: -38px;
    }
    .card p {
        font-size: 12px;
        font-weight: 200;
        line-height: 100%;
        margin-bottom: 12px;
    }
    .card h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 56px;
    }
    .card span {
        font-size: 48px;
        font-weight: 500;
        line-height: 100%;
    }
    .card ul {
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 200;
        list-style-position: inside;
    }
    .card button {
        display: flex;
        padding: 16px 32px;
        background: transparent;
        border-radius: 32px;
        border: 1px solid #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        color: #fff;
        margin-top: auto;
        align-self: center;
        transition: all 200ms ease;
    }
    .card button:hover {
        background: #fff;
        color: #333;
        transform: scale(1.1);
    }
    }
</style>