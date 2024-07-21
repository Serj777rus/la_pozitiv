<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu @openVidget="toggle"></HeadMenu>
        <div class="contact_main">
            <div class="contact_div">
                <img src="@/assets/photos/logo300x300.png">
                <div class="line"></div>
                <div class="info_contact_block">
                    <div class="info_contact_block_left">
                        <div class="content_block">
                            <p>Свяжитесь с нами</p>
                            <span>Оставьте заявку через форму или свяжитесь с нами любым удобным для Вас способом и мы подробно ответим Вам на все ваши вопросы</span>
                        </div>
                        <div class="right_side">
                            <div class="content_block">
                            <p>Посетите нас</p>
                            <span>г. Москва, 3-я хорошевская ул.,
                                д.21 к2</span>
                            </div>
                            <div class="content_block">
                                <p>Напишите нам</p>
                                <span>vocal@la-pozitiv.ru</span>
                            </div>
                            <div class="content_block">
                                <p>Позвоните нам</p>
                                <span>+7(495) 777 77 77</span>
                            </div>
                        </div>
                    </div>
                    <div class="info_contact_block_right">
                        <img src="@/assets/photos/contact/1.png">
                        <img src="@/assets/photos/contact/2.png">
                        <img src="@/assets/photos/contact/3.png">
                        <img src="@/assets/photos/contact/4.png">
                    </div>
                </div>
            </div>
        </div>
    <Footer></Footer>
    <Vidget ref="vidgetComponent"></Vidget>
</template>

<script>
import Footer from './UI_components/Footer.vue';
import HeadMenu from './UI_components/HeadMenu.vue';
import Vidget from './UI_components/Vidget.vue';

    export default {
        components: {
            HeadMenu,
            Footer,
            Vidget
        },
        methods: {
            toggle() {
                this.$refs.vidgetComponent.toggleActive();
            }
        }
    }
</script>

<style scoped>
    .contact_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
    .contact_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
    .contact_div img {
        width: 300px;
        object-fit: cover;
        display: flex;
        align-self: center;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #FFCEC2;
    }
    .info_contact_block {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .info_contact_block_left {
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 64px;
    }
    .right_side {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 64px;
    }
    .content_block {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 12px;
    }
    .content_block p {
        font-size: 36px;
        line-height: 100%;
        font-weight: 700;
    }
    .content_block span {
        font-size: 20px;
        line-height: 100%;
        font-weight: 200;
    }
    .info_contact_block_right {
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .info_contact_block_right img:nth-child(1) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        top: 48px;
        left: 0;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        border-radius: 8px;
    }
    .info_contact_block_right img:nth-child(2) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        top: 0;
        right: 0;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        border-radius: 8px;
    }
    .info_contact_block_right img:nth-child(3) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        bottom: -80px;
        left: 32px;
        z-index: 3;
        border: 8px solid transparent;
        box-sizing: border-box;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        border-radius: 8px;
    }
    .info_contact_block_right img:nth-child(4) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        bottom: 0;
        right: 32px;
        z-index: 2;
        border: 8px solid transparent;
        box-sizing: border-box;
        box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
        border-radius: 8px;
    }
    @media all and (max-width: 430px) {
    * {
        box-sizing: border-box;
    }
    .contact_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        padding: 0px 10px;
    }
    .contact_div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 48px;
    }
    .contact_div img {
        width: 300px;
        object-fit: cover;
        display: flex;
        align-self: center;
        display: none;
    }
    .line {
        width: 100%;
        height: 1px;
        background: #494949;
        display: none;
    }
    .info_contact_block {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .info_contact_block_left {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .right_side {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
    }
    .content_block {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 12px;
    }
    .content_block p {
        font-size: 20px;
        line-height: 100%;
        font-weight: 700;
    }
    .content_block span {
        font-size: 12px;
        line-height: 100%;
        font-weight: 200;
    }
    .info_contact_block_right {
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        display: none;
    }
    .info_contact_block_right img:nth-child(1) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        top: 48px;
        left: 0;
    }
    .info_contact_block_right img:nth-child(2) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        top: 0;
        right: 0;
    }
    .info_contact_block_right img:nth-child(3) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        bottom: -80px;
        left: 32px;
        z-index: 3;
        border: 8px solid #252525;
        box-sizing: border-box;
    }
    .info_contact_block_right img:nth-child(4) {
        position: absolute;
        width: 250px;
        object-fit: cover;
        bottom: 0;
        right: 32px;
        z-index: 2;
        border: 8px solid #252525;
        box-sizing: border-box;
    }
    }
</style>