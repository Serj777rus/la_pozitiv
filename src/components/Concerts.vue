<!-- eslint-disable vue/multi-word-component-names -->
<template>
<HeadMenu></HeadMenu>
<div class="concerts_main">
    <div class="years">
        <div class="year"><p v-for="years in year" :key="years" @click="sortMonth(years)">{{ years }}</p></div>
        <div class="month"><p v-for="months in month" :key="months" @click="sortDate(months, this.yearsmonth.year)">{{ months }}</p></div>
        <div class="concert_block">
            <div class="partys_table">
                <div class="partys_left_side" v-for="partys in party" :key="partys.id">
                    <div class="concert_data">
                        <div class="partys_date">{{ partys.date }} {{ partys.month }}</div>
                        <span>{{ partys.name }}</span>
                        <p>{{ partys.place }}</p>
                    </div>
                    <div class="arrow_show" @click="showParty(partys.id)">
                        <p>Показать</p>
                        <img src="@/assets/photos/concerts/Arrow.svg">
                    </div>
                </div>
            </div>
            <div class="partys_right_side" v-for="partys in party" :key="partys.id" v-show="isShowParty == partys.id">
                <video :src="partys.video" controls muted></video>
                <div class="party_photo">
                    <img v-for="photo in partys.photo" :key="photo" :src="photo">
                </div>
            </div>
        </div>
    </div>
</div>
<Footer></Footer>
</template>

<script>
import Footer from './UI_components/Footer.vue';
import HeadMenu from './UI_components/HeadMenu.vue';
    export default {
        components: {
            HeadMenu,
            Footer
        },
        data() {
            return {
                concerts: [{
                    id: 1,
                    year: '2024',
                    month: 'Июнь',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://videocdn.cdnpk.net/videos/526eb1e2-9ac0-4021-bd1a-4d593fe8bda6/horizontal/previews/clear/large.mp4?token=exp=1719918599~hmac=6bcfade5d37ead7842c678d226de7d548dfe21005fbb783d870ef4f4bd04c385',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 11,
                    year: '2024',
                    month: 'Июнь',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 2,
                    year: '2023',
                    month: 'Май',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 3,
                    year: '2022',
                    month: 'Апрель',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 4,
                    year: '2021',
                    month: 'Март',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 5,
                    year: '2020',
                    month: 'Февраль',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 6,
                    year: '2024',
                    month: 'Октябрь',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 7,
                    year: '2023',
                    month: 'Май',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 8,
                    year: '2022',
                    month: 'Апрель',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 8,
                    year: '2021',
                    month: 'Март',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                },
                {
                    id: 10,
                    year: '2020',
                    month: 'Февраль',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmimigram.ru%2Fblog%2Fchto-takoe-foto-tekhnologiya-ili-iskusstvo%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAE', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canva.com%2Fru_ru%2Fobuchenie%2Ffotografii-prirody-50-sovetov%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fspecial%2Ffujifilm%2Fugaday-chto-na-foto%2F&psig=AOvVaw2POCYeVX-hwWbYmMJsmLb-&ust=1719948458561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCX3MXJhocDFQAAAAAdAAAAABAS']
                }],
                year: [],
                month: [],
                party: [],
                yearsmonth: {
                    year: '',
                    month: ''
                },
                isShowParty: null
            }
        },
        methods: {
            sortConcerts() {
                let arr =[]
                this.concerts.forEach(el => {
                    arr.push(el.year);
                })
                this.year = [...new Set(arr)];
                this.sortMonth(this.year[0]);
            },
            sortMonth(years) {
                let arr = [];
                this.concerts.forEach(el => {
                    if (el.year == years) {
                        arr.push(el.month);
                    }
                    this.month = [...new Set(arr)];
                })
                this.yearsmonth.year = years;
                this.sortDate(this.month[0], years);
            },
            sortDate(month, years) {
                this.party = [];
                this.concerts.forEach(el => {
                    if (el.month == month && el.year == years) {
                        this.party.push(el);
                    }
                })
                this.isShowParty = this.party[0].id;
                console.log(this.party);
            },
            showParty(id) {
                this.isShowParty = id;
            } 
        },
        mounted() {
            this.sortConcerts();
            console.log(this.year);
        }
    }
</script>

<style scoped>
    .concerts_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        flex-direction: column;
    }
    .years {
        width: 1200px;
        display: flex;
        flex-direction: column;
    }
    .year {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .month {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 24px;
        padding: 20px 0px;
        box-sizing: border-box;
        border-top: 1px solid #8c8c8c;
    }
    .concert_block {
        display: flex;
        width: 100%;
        flex-direction: row;
        margin-top: 40px;
        justify-content: space-between;
        gap: 80px;
    }
    .partys_table {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 520px;  
    }
    .partys_left_side {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #8c8c8c;
        padding-bottom: 32px;
        width: 100%;
        height: auto;
    }
    .arrow_show {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 12px;
        align-self: flex-end;
        font-size: 16px;
        font-weight: 200;
    }
    .concert_data {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .concert_data span {
        font-size: 24px;
        line-height: 100%;
        font-weight: 500;
    }
    .concert_data p {
        font-size: 16px;
        line-height: 100%;
        font-weight: 200;
    }
    .partys_date {
        font-size: 16px;
        font-weight: 200;
    }
    .partys_right_side {
        width: 660px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .party_photo {
    }
</style>