<!-- eslint-disable vue/multi-word-component-names -->
<template>
<HeadMenu></HeadMenu>
<div class="education_main">
    <div class="education_div">
        <h3>Направления обучения</h3>
        <div class="line"></div>
        <div class="education_cards">
            <div class="education_card" v-for="card in educations" :key="card.id">
                <img :src="card.image">
                <div class="descr_div">
                    <h3>{{ card.name }}</h3>
                    <h4>{{ card.price }}</h4>
                    <h5>{{ card.description }}</h5>
                </div>
                <Button @click="showCardCourse(card)"><slot>Подробнее</slot></Button>
            </div>
        </div>
    </div>
</div>
<div class="big_card" v-show="isShowCard">
    <div class="big_card_body">
        <img :src="bigcard.image">
        <h3>{{ bigcard.name }}</h3>
        <h4>{{ bigcard.price }}</h4>
        <h5>{{ bigcard.description }}</h5>
        <Button @click="showPop"><slot>Поробовать</slot></Button>
        <font-awesome-icon :icon="['fas', 'xmark']" style="color: #ffffff; font-size: 32px; position: absolute; top: 48px; right: 48px; cursor: pointer;" @click="closeCard" />
    </div>
</div>
<PopUp v-show="isShowPopUp" @closePop="closePop"></PopUp>
<Footer></Footer>
</template>

<script>
    import HeadMenu from '@/components/UI_components/HeadMenu.vue'
    import Footer from './UI_components/Footer.vue';
    import Button from './UI_components/Button.vue';
    import PopUp from './UI_components/PopUp.vue';
    export default {
        components: {
            HeadMenu,
            Footer,
            Button,
            PopUp
        },
        data() {
            return {
                educations: [{
                    id: 1,
                    name: 'Вокал',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/vocal.png')
                },
                {
                    id: 2,
                    name: 'Вокал online',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/vocal_online.png')
                },
                {
                    id: 3,
                    name: 'Фортепиано',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/fortepiano.png')
                },
                {
                    id: 4,
                    name: 'Сольфеджио',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/solfedgio.png')
                },
                {
                    id: 5,
                    name: 'Музыкальная литература',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/literature.png')
                },
                {
                    id: 6,
                    name: 'Гитара',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/guitar.png')
                },
                {
                    id: 7,
                    name: 'Электрогитара',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/electroguitar.png')
                },
                {
                    id: 8,
                    name: 'Звукозапись',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/zapis.png')
                },
                {
                    id: 9,
                    name: 'Сценическое мастерство',
                    price: 'от 700р/урок',
                    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                    image: require('@/assets/photos/education/acter.png')
                }
                ],
                bigcard: {
                    image: '',
                    name: '',
                    price: '',
                    description: ''
                },
                isShowCard: false,
                isShowPopUp: false
            }
        },
        methods: {
            showCardCourse(card) {
                this.bigcard.image = card.image;
                this.bigcard.name = card.name;
                this.bigcard.price = card.price;
                this.bigcard.description = card.description;
                this.isShowCard = true;
            },
            closeCard() {
                this.isShowCard = false
            },
            showPop() {
                if (this.isShowCard == true) {
                    this.isShowCard = false
                }
                this.isShowPopUp = true
            },
            closePop() {
                this.isShowPopUp = false
            }
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
        margin-bottom: 80px;
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
        width: 370px;
        height: 480px;
        border-radius: 32px;
        border: 1px solid #494949;
        background: #333;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .education_card img {
        width: 100%;
        border-radius: 22px 22px 0px 0px;
    }
    .descr_div {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 8px;
    }
    .education_card:nth-child(9) h3 {
        font-size: 24px;
    }
    .education_card:nth-child(5) h3 {
        font-size: 24px;
    }
    .education_card h3 {
        font-size: 32px;
        text-align: start;
        margin-bottom: 0px;
        line-height: 100%;
    }
    .education_card h4 {
        font-size: 24px;
        font-weight: 500;
        line-height: 100%;
    }
    .education_card h5 {
        font-size: 16px;
        font-weight: 200;
        line-height: 100%;
        max-height: 80px;
        overflow: hidden;
        -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    }
    button {
        align-self: center;
        justify-self: center;
    }

    .big_card {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .7);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .big_card_body {
        width: 370px;
        border-radius: 32px;
        border: 1px solid #494949;
        background: #333;
        display: grid;
        flex-direction: column;
        padding: 10px;
        justify-content: flex-start;
        box-sizing: border-box;
    }
    .big_card_body img {
        width: 100%;
        border-radius: 22px 22px 0px 0px;
        margin-bottom: 12px;
    }
    .big_card_body h3 {
        font-size: 32px;
        text-align: start;
        margin-bottom: 0px;
        margin-bottom: 12px;
        line-height: 100%;
    }
    .big_card_body h4 {
        font-size: 24px;
        margin-bottom: 12px;
        font-weight: 500;
        line-height: 100%;
    }
    .big_card_body h5 {
        font-size: 16px;
        font-weight: 200;
        line-height: 100%;
    }
    .big_card_body button {
        align-self: center;
        justify-self: center;
        margin-top: 32px;
    }
    .big_card:nth-child(9) h3 {
        font-size: 24px;
    }
    .big_card:nth-child(5) h3 {
        font-size: 24px;
    }
</style>