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
                <div class="tabs" :class="{ active: isShowPrice ==  tab.forwho}" v-for="tab in prices" :key="tab.id" @click="showPrice(tab.forwho)">{{ tab.forwho }}</div>
            </div>
            <div class="description_tab" v-for="desc in prices" :key="desc.id" v-show="isShowPrice == desc.forwho">
                <p :class="{ active: isShowCatPrice ==  categorys.name}" v-for="categorys in desc.categorys" :key="categorys" @click="isShowCatPrice = `${categorys.name}`">{{ categorys.name }}</p>
            </div>
            <div class="price_card">
                <div class="cards" v-for="price in prices" :key="price.id" v-show="isShowPrice == price.forwho">
                    <div class="card_price" v-for="category in price.categorys" :key="category.name" v-show="isShowCatPrice == category.name">
                        <div class="card" v-for="datas in category.details" :key="datas.type">
                            <p>{{ datas.type }}</p>
                            <span>{{ datas.price }}</span>
                            <h4>{{ datas.description }}</h4>
                            <button @click="showPop">Купить</button>
                            <!-- <img src="@/assets/photos/price/ribbon.png"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    <PopUp v-show="isShowPopUp" @closePop="closePop"></PopUp>
</template>

<script>
import axios from 'axios';
import Footer from './UI_components/Footer.vue';
import HeadMenu from './UI_components/HeadMenu.vue';
import PopUp from './UI_components/PopUp.vue';

    export default {
        components: {
            HeadMenu,
            Footer,
            PopUp
        },
        data() {
            return {
                prices: [],
                isShowPrice: 'Дети',
                isShowCatPrice: 'Абонементы',
                url: process.env.VUE_APP_SERVER,
                isShowPopUp: false,
            }
        },
        methods: {
            showPrice(name) {
                if (this.isShowPrice !== name) {
                    this.isShowPrice = name;
                }
            },
            async getPrice() {
                this.prices = [];
                try {
                    const response = await axios.get(`${this.url}/getprice`);
                    if (response && response.data && response.data.data) {
                        console.log(response.data.data);
                        let data = response.data.data;
                        data.forEach(el => {
                            let existingObj = this.prices.find(p => p.forwho === el.attributes.forwho);
                            if (existingObj) {
                                let existingCategory = existingObj.categorys.find(c => c.name === el.attributes.name);
                                if (existingCategory) {
                                    // Добавляем новый объект в массив категории, если такой объект ещё не существует
                                    let existingDetails = existingCategory.details.find(d =>
                                        d.type === el.attributes.type &&
                                        d.description === el.attributes.description &&
                                        d.price === el.attributes.price
                                    );
                                    if (!existingDetails) {
                                        existingCategory.details.push({
                                            type: el.attributes.type,
                                            description: el.attributes.description,
                                            price: el.attributes.price
                                        });
                                    }
                                } else {
                                    // Если категории с таким именем нет, добавляем новую категорию с деталями
                                    let newCategory = {
                                        name: el.attributes.name,
                                        details: [{
                                            type: el.attributes.type,
                                            description: el.attributes.description,
                                            price: el.attributes.price
                                        }]
                                    };
                                    existingObj.categorys.push(newCategory);
                                }
                            } else {
                                // Если объекта с таким forwho нет, создаём новый объект
                                let newObj = {
                                    id: el.id,
                                    forwho: el.attributes.forwho,
                                    categorys: [{
                                        name: el.attributes.name,
                                        details: [{
                                            type: el.attributes.type,
                                            description: el.attributes.description,
                                            price: el.attributes.price
                                        }]
                                    }]
                                };
                                this.prices.push(newObj);
                            }
                        });
                        console.log(this.prices);
                    } else {
                        console.log('Ошибка: данные не получены.');
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            showPop() {
                this.isShowPopUp = true
            },
            closePop() {
                this.isShowPopUp = false
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
        justify-content: space-evenly;
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
        flex-direction: row;
        gap: 18px;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
    }
    .description_tab p {
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        line-height: 100%;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 160ms ease;
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
    .card_price {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
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
        justify-content: space-between;
    }
    .card img {
        position: absolute;
        top: -38px;
        right: -38px;
    }
    .card p {
        font-size: 32px;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 12px;
    }
    .card h4 {
        font-size: 20px;
        font-weight: 200;
        line-height: 100%;
        margin-bottom: 56px;
    }
    .card span {
        font-size: 48px;
        font-weight: 200;
        line-height: 100%;
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
        align-self: center;
        transition: all 200ms ease;
        cursor: pointer;
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
        flex-direction: row;
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
    .card_price {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .card {
        width: 90%;
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
        font-size: 32px;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 12px;
    }
    .card h4 {
        font-size: 20px;
        font-weight: 200;
        line-height: 100%;
        margin-bottom: 56px;
    }
    .card span {
        font-size: 48px;
        font-weight: 200;
        line-height: 100%;
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
        align-self: center;
        transition: all 200ms ease;
        cursor: pointer;
    }
    .card button:hover {
        background: #fff;
        color: #333;
        transform: scale(1.1);
    }
    }
</style>