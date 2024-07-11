<!-- eslint-disable vue/multi-word-component-names -->
<template>
<HeadMenu></HeadMenu>
<!-- <div class="concerts_main">
    <div class="years">
        <div class="year"><p v-for="years in year" :key="years" @click="sortMonth(years)" :class="{ yearactive: years == this.yearsmonth.year }">{{ years }}</p></div>
        <div class="month"><p v-for="months in month" :key="months" @click="sortDate(months, this.yearsmonth.year)" :class="{ yearactive: months == this.yearsmonth.month }">{{ months }}</p></div>
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
            <div class="partys_right_side" v-for="partys in party" :key="partys.id" :class="{ active: isShowParty == partys.id }">
                <video :src="partys.video" controls muted></video>
                <div class="party_photo">
                    <img v-for="(photo, index) in partys.photo" :key="photo" :src="photo" @click="showBigPhoto(partys.id, index)">
                </div>
            </div>
        </div>
    </div>
</div>
<div class="photo_modal" v-show="isphotoModal !== null">
    <div class="photo_block" v-for="photo in party" :key="photo.id" :class="{ activ: isphotoModal == photo.id }">
        <img class="modalphoto" v-for="(photos, index) in photo.photo" :key="photos" :src="photos" :class="{ activephoto: index == showPhoto }">
        <font-awesome-icon :icon="['fas', 'xmark']" style="color: #fff; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" @click="closePhotoModal" />
        <div class="carusel_tab_prew" @click="tabsPrew(photo)">
            <img src="@/assets/photos/about/prew.svg">
        </div>
        <div class="carusel_tab_next" @click="tabsNext(photo)">
            <img src="@/assets/photos/about/next.svg">
        </div>
    </div>
</div> -->
<div class="concerts_main">
    <div class="concerts_div">
        <h3>Наши вечеринки</h3>
        <div class="concerts_video_block">
            <div class="video" v-for="video in videos" :key="video.id">
                <video :src="video.attributes.url" controls></video>
                <p></p>
            </div>
        </div>
        <div class="concerts_photo_block">
            <img v-for="photo in photos" :key="photo.id" :src="photo.attributes.url">
        </div>
    </div>
</div>
<Footer></Footer>
</template>

<!-- <script>
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
                    video: 'https://videocdn.cdnpk.net/videos/77f532e8-b596-46a4-ba5d-ffa4c5d6aec6/horizontal/previews/clear/large.mp4?token=exp=1720005032~hmac=6e7c74fd8545f9b9659fa15565683945e286b55fce025b357f654fb6090b1c85',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380', 'https://img.freepik.com/free-photo/front-view-hands-holding-vinyl-disc_23-2149403580.jpg?t=st=1720002696~exp=1720006296~hmac=c98d65ef657196ec477421ab25653f3d2fe2c21ffc192f35938e6ea4b32cd279&w=1380']
                },
                {
                    id: 11,
                    year: '2024',
                    month: 'Июнь',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 11,
                    year: '2024',
                    month: 'Январь',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 11,
                    year: '2024',
                    month: 'Декабрь',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 2,
                    year: '2023',
                    month: 'Май',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 3,
                    year: '2022',
                    month: 'Апрель',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 4,
                    year: '2021',
                    month: 'Март',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 5,
                    year: '2020',
                    month: 'Февраль',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 6,
                    year: '2024',
                    month: 'Октябрь',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 7,
                    year: '2023',
                    month: 'Май',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 8,
                    year: '2022',
                    month: 'Апрель',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 8,
                    year: '2021',
                    month: 'Март',
                    date: '14',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 10,
                    year: '2020',
                    month: 'Февраль',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                },
                {
                    id: 10,
                    year: '2025',
                    month: 'Февраль',
                    date: '15',
                    name: 'Отчетный концерт',
                    place: 'Зал "Радуга"',
                    video: 'https://youtu.be/G6DFj6m6jHA?si=m5OUSH27NfyObWND',
                    photo: ['https://img.freepik.com/free-vector/realistic-russia-day-event_23-2148559618.jpg?t=st=1719918207~exp=1719921807~hmac=db07495bba9b15295418a3a5e200216e065de5bb3b6f1121fb0e9ff73b6cea32&w=1480', 'https://img.freepik.com/free-photo/desk-musician_23-2147670283.jpg?t=st=1719992664~exp=1719996264~hmac=804c117d5d58832077e548861a7d5e819e1ab011f639f56c06c9dbe57975115a&w=1380']
                }],
                year: [],
                month: [],
                party: [],
                yearsmonth: {
                    year: '',
                    month: ''
                },
                isShowParty: null,
                isphotoModal: null,
                showPhoto: null,
                windowSize: innerWidth
            }
        },
        methods: {
            sortConcerts() {
                let arr =[]
                this.concerts.forEach(el => {
                    arr.push(el.year);
                })
                this.year = [...new Set(arr)].sort(function(a, b) {return b - a});
                this.sortMonth(this.year[0]);
            },
            sortMonth(years) {
                let arr = [];
                const monthsOrder = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
                this.concerts.forEach(el => {
                    if (el.year == years) {
                        arr.push(el.month);
                    }
                    this.month = [...new Set(arr)].sort((a, b) => monthsOrder.indexOf(a) - monthsOrder.indexOf(b));
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
                this.yearsmonth.month = month;
                console.log(this.party);
            },
            showParty(id) {
                this.isShowParty = id;
            },
            showBigPhoto(id, index) {
                this.party.forEach(el => {
                    if(el.id == id) {
                        this.showPhoto = index;
                    }
                })
                this.isphotoModal = id;
            },
            closePhotoModal() {
                this.isphotoModal = null;
            },
            tabsPrew(photo) {
                let arrLen = photo.photo.length;
                if (this.showPhoto - 1 < 0) {
                    this.showPhoto = arrLen - 1;
                } else {
                    this.showPhoto = this.showPhoto - 1;
                }
            },
            tabsNext(photo){
                let arrLen = photo.photo.length;
                if (this.showPhoto + 1 > arrLen - 1) {
                    this.showPhoto = 0
                } else {
                    this.showPhoto = this.showPhoto + 1;
                }
            },
            resizeFunc() {
                this.windowSize = window.innerWidth;
            }
        },
        mounted() {
            window.addEventListener('resize', this.resizeFunc);
            this.sortConcerts();
            console.log(this.year);
        }
    }
</script> -->
<script>
    import axios from 'axios';
    import HeadMenu from './UI_components/HeadMenu.vue';
    import Footer from './UI_components/Footer.vue';
    export default {
        components: {
            HeadMenu,
            Footer
        },
        data() {
            return {
                videos: [],
                photos: [],
                url: process.env.VUE_APP_SERVER
            }
        },
        methods: {
           async getPhotoVideo() {
                try {
                    const response = await axios.get(`${this.url}/getphotosvideos`);
                    if (response.status == 200) {
                        // console.log(response.data.data[0].attributes.content.data)
                        const data = response.data.data[0].attributes.content.data;
                        data.forEach(el => {
                            if (el.attributes.ext == '.JPG' || el.attributes.ext == '.jpeg') {
                                this.photos.push(el)
                            } else {
                                if (el.attributes.ext == '.mp4') {
                                    this.videos.push(el)
                                }
                            }
                        })
                    } else {
                        console.log(response.status);
                    }
                    console.log(this.photos);
                    console.log(this.videos);
                } catch (error) {
                    console.log(error)
                }
            }
        },
        mounted() {
            this.getPhotoVideo();
        }
    }

</script>
<style scoped>
    /* .concerts_main {
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
        font-size: 48px;
        font-weight: 200;
        line-height: 100%;
        cursor: pointer;
    }
    .yearactive {
        border-bottom: 1px solid #fff;
    }
    .month {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 24px;
        padding: 20px 0px;
        box-sizing: border-box;
        border-top: 1px solid #FFCEC2;
        font-size: 24px;
        font-weight: 200;
        line-height: 100%;
        cursor: pointer;
    }
    .concert_block {
        display: flex;
        width: 100%;
        flex-direction: row;
        margin-top: 40px;
        justify-content: space-between;
        gap: 80px;
        overflow: hidden;
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
        border-bottom: 1px solid #FFCEC2;
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
        cursor: pointer;
        box-sizing: border-box;
        transition: all 300ms ease;
    }
    .arrow_show:hover {
        padding: 8px;
        border: 1px solid #fff;
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
        display: none;
        flex-direction: column;
        gap: 32px;
        box-sizing: border-box;
}
    .partys_right_side video {
        width: 600px;
        object-fit: cover;
        border-radius: 16px;
        border: 1px solid #494949;
    }
    .party_photo {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
    }
    .party_photo img {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        object-fit: cover;
        cursor: pointer;
    }
    .active {
        position: relative;
        z-index: 999;
        box-sizing: border-box;
        display: flex;
    }
    .photo_modal {
        width: 100%;
        height: 100vh;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: rgba(0, 0, 0, .7);
    }
    .photo_block {
        width: 1200px;
        display: none;
        justify-content: center;
        align-items: center;
    }
    .modalphoto {
        height: 80vh;
        object-fit: contain;
        display: none;
    }
    .activ {
        display: flex;
    }
    .activephoto {
        display: flex;
    }
    .carusel_tab_prew {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
    }
    .carusel_tab_next {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
    }
    @media all and (max-width: 430px) {
        * {
            box-sizing: border-box;
        }
        .concerts_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        flex-direction: column;
        padding: 0px 10px;
    }
    .years {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .year {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
        font-size: 32px;
        font-weight: 200;
        line-height: 100%;
        cursor: pointer;
        overflow-x: scroll;
    }
    .yearactive {
        border-bottom: 1px solid #fff;
    }
    .month {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-top: 24px;
        padding: 20px 0px;
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 200;
        line-height: 100%;
        cursor: pointer;
        overflow-x: scroll;
    }
    .concert_block {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 40px;
        gap: 40px;
    }
    .partys_table {
        display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;
        white-space: nowrap;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }
    .partys_left_side {
        display: flex;
        flex: 0 0 auto;
        flex-direction: column;
        gap: 32px;
        padding-bottom: 32px;
        width: 70%;
        scroll-snap-align: start;
    }
    .arrow_show {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 12px;
        align-self: flex-start;
        font-size: 16px;
        font-weight: 200;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 300ms ease;
    }
    .arrow_show:hover {
        padding: 8px;
        border: 1px solid #fff;
    }
    .concert_data {
        display: flex;
        flex-direction: column;
        gap: 6px;
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
        width: 100%;
        display: none;
        flex-direction: column;
        gap: 32px;
        box-sizing: border-box;
}
    .partys_right_side video {
        width: 100%;
        object-fit: cover;
        border-radius: 16px;
        border: 1px solid #494949;
    }
    .party_photo {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
    }
    .party_photo img {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        object-fit: cover;
        cursor: pointer;
    }
    .active {
        box-sizing: border-box;
        display: flex;
    }
    .photo_modal {
        width: 100%;
        height: 100vh;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        z-index: 999;
        background: rgba(0, 0, 0, .7);
        padding: 0px 10px;
    }
    .photo_block {
        width: 100%;
        display: none;
        justify-content: center;
        align-items: center;
    }
    .modalphoto {
        width: 100%;
        height: auto;
        object-fit: contain;
        display: none;
    }
    .activ {
        display: flex;
    }
    .activephoto {
        display: flex;
    }
    .carusel_tab_prew {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
    }
    .carusel_tab_next {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
    }
    } */
</style>