<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="posts_main">
        <div class="posts_div">
            <div class="posts_zglvk">
                <h3>Новости и анонсы мероприятий</h3>
                <p>Приглашаем Вас посетить наши мероприятия, концерты и вечеринки с участием наших учеников</p>
            </div>
            <div class="posts">
                <div class="post" v-for="post in posts" :key="post.id">
                <img :src="post.image">
                <div class="line_post"></div>
                <div class="post_text">
                    <h4>{{ post.name }}</h4>
                    <p>{{ post.date }}</p>
                    <h5>{{ post.description }}</h5>
                    <Button class="btn" @click="openPost(post)"><slot>Читать</slot></Button>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="modal_post" :class="{ active: isPostModalActive }">
        <div class="modal_div">
            <div class="text">
                <div class="img_date">
                    <img :src="postModal.image">
                    <p>{{ postModal.date }}</p>
                </div>
                <h5>{{ postModal.name }}</h5>
                <div class="modal_desc">
                    <h6>{{ postModal.description }}</h6>
                </div>
            </div>
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #494949; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" @click="closeModal" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Button from './Button.vue';
    export default {
        components: {
            Button
        },
        data() {
            return {
                posts: [],
                postModal: {
                    name: '',
                    image: '',
                    description: '',
                    date: ''
                },
                isPostModalActive: false,
                serverUrl: process.env.VUE_APP_SERVER
            }
        },
        methods: {
            openPost(post) {
                this.isPostModalActive = true;
                this.postModal = post;
            },
            closeModal() {
                this.isPostModalActive = false;
            },
            async testGet() {
                try {
                    const response = await axios.get(`${this.serverUrl}/testroute`);
                    if (response.status == 200) {
                        console.log(response.data);
                        this.posts = response.data;
                    } else {
                        // console.log(response.data);
                    }
                }
                catch(error) {
                    console.log(`Ошибка ${error}`)
                }
            }
        },
        mounted() {
            this.testGet();
        }  
    }
</script>

<style scoped>
    .posts_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
        overflow: hidden;
    }
    .posts_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .posts_zglvk {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .posts_zglvk h3 {
        font-size: 48px;
        font-weight: 900;
        line-height: 100%;
    }
    .posts_zglvk p {
        font-size: 16px;
        font-weight: 200;
        line-height: 100%;
    }
    .posts {
        display: flex;
        width: 100%;
        padding: 16px 0px;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
        margin-top: 40px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        overflow-y: hidden;
        box-sizing: border-box;
    }
    .post {
        width: 300px;
        height: 480px;
        /* border: 1px solid #494949; */
        border-radius: 32px;
        padding: 10px;
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(10px);
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        box-sizing: border-box;
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
    }
    .btn {
        align-self: center;
    }
    .post img {
        width: 100%;
        max-height: 166px;
        border-radius: 22px 22px 0px 0px;
        object-fit: cover;
    }
    .line_post {
        width: 100%;
        height: 1px;
        background: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .post_text {
        display: flex;
        width: 100%;
        height: 53%;
        flex-direction: column;
        justify-content: space-between;
    }
    .post h4 {
        font-size: 24px;
        font-weight: 700;
    }
    .post h5 {
        font-size: 16px;
        font-weight: 200;
        /* margin-top: 16px; */
        max-height: 60px;
        overflow: hidden;
    }
    .post p {
        font-size: 16px;
        font-weight: 200;
        /* margin-top: 16px; */
    }
    .post_text button {
        align-self: center;
    }
    .modal_post {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
        opacity: 0;
        transition: all 300ms ease;
    }
    .modal_div {
        width: 600px;
        position: relative;
        height: auto;
        background: #fff;
        border-radius: 32px;
        display: flex;
        justify-content: center;
        align-items: start;
        padding: 48px;
    }
    .img_date {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 32px;
    }
    .img_date img {
        border-radius: 16px 16px 16px 16px;
        width: 100%;
        object-fit: cover;
    }
    .img_date p {
        color: #000;
        font-size: 16px;
        font-weight: 100;
    }
    .text h5 {
        font-size: 24px;
        font-weight: 900;
        color: #000;
    }
    .text h6 {
        font-size: 16px;
        color: #000;
        font-weight: 200;
    }
    .modal_desc {
        max-height: 160px;
        overflow-y: scroll;
    }
    .active {
        /* display: flex; */
        opacity: 1;
        z-index: 999;
    }
    @media all and (max-width: 440px) {
        .posts_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
        padding: 0px 10px; 
    }
    .posts_div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    .posts_zglvk {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .posts_zglvk h3 {
        font-size: 32px;
        font-weight: 900;
        line-height: 100%;
        text-align: center;
    }
    .posts_zglvk p {
        font-size: 12px;
        font-weight: 200;
        line-height: 100%;
        text-align: center;
    }
    .posts {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
        margin-top: 40px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }
    .post {
        width: 300px;
        height: 480px;
        border-radius: 32px;
        padding: 10px;
        box-sizing: border-box;
        scroll-snap-align: start;
    }
    .post img {
        width: 280px;
        height: 166px;
        border-radius: 22px 22px 0px 0px;
    }
    .line_post {
        width: 100%;
        height: 1px;
        background: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .post_text {
        display: flex;
        width: 100%;
        height: 53%;
        flex-direction: column;
        justify-content: space-between;
    }
    .post h4 {
        font-size: 24px;
        font-weight: 700;
    }
    .post h5 {
        font-size: 16px;
        font-weight: 200;
        /* margin-top: 16px; */
        max-height: 60px;
        overflow: hidden;
    }
    .post p {
        font-size: 16px;
        font-weight: 200;
        /* margin-top: 16px; */
    }
    .post_text button {
        align-self: center;
    }
    .modal_post {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
    }
    .modal_div {
        width: 100%;
        height: auto;
        position: relative;
        background: #fff;
        border-radius: 32px;
        display: flex;
        justify-content: center;
        align-items: start;
        padding: 52px 24px 24px 24px;
    }
    .img_date {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 32px;
    }
    .img_date img {
        border-radius: 16px 16px 16px 16px;
    }
    .img_date p {
        color: #000;
        font-size: 16px;
        font-weight: 100;
    }
    .text h5 {
        font-size: 24px;
        font-weight: 900;
        color: #000;
    }
    .text h6 {
        font-size: 16px;
        color: #000;
        font-weight: 200;
    }
    .modal_desc {
        max-height: 160px;
        overflow-y: scroll;
    }
    .active {
        display: flex;
    }
    * {
    box-sizing: border-box;
}
    }
</style>