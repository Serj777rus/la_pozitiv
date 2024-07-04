<template>
    <div class="headmenu_main" v-if="mediaWidth > 1180">
        <div class="headmenu_div">
            <img src="~@/assets/photos/logo.svg">
            <div class="menus">
                <router-link :to="{ name: 'home' }"><p>Главная</p></router-link>
                <router-link :to="{ name: 'education' }"><p>Направления</p></router-link>
                <router-link :to="{ name: 'teachers' }"><p>Педагоги</p></router-link>
                <router-link :to="{ name: 'concerts' }"><p>Наша жизнь</p></router-link>
                <router-link :to="{ name: 'price' }"><p>Цены</p></router-link>
                <router-link :to="{ name: 'contact' }"><p>Контакты</p></router-link>
            </div>
            <div class="button_div">
                <font-awesome-icon :icon="['fab', 'whatsapp']" style="align-self: center; font-size: 24px; color: green; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'vk']" style="color: #74C0FC; font-size: 24px; align-self: center; cursor: pointer;" />
                <button @click="testGet">Записаться</button>
            </div>
        </div>
    </div>
    <div class="headmenu_mobile" v-if="mediaWidth < 440">
        <div class="menu_mobile">
            <img src="~@/assets/photos/logo.svg">
            <font-awesome-icon :icon="['faL', 'bars']" style="font-size: 32px; " @click="isShowMenu = true"/>
        </div>
    </div>
    <div class="menu_bar_main" v-if="mediaWidth < 440 && isShowMenu">
        <div class="menu_bar">
            <p>Меню</p>
            <div class="menus_mobile">
                <router-link :to="{ name: 'home' }"><p>Главная</p></router-link>
                <router-link :to="{ name: 'education' }"><p>Направления</p></router-link>
                <router-link :to="{ name: 'teachers' }"><p>Педагоги</p></router-link>
                <router-link :to="{ name: 'concerts' }"><p>Наша жизнь</p></router-link>
                <router-link :to="{ name: 'price' }"><p>Цены</p></router-link>
                <router-link :to="{ name: 'contact' }"><p>Контакты</p></router-link>
            </div>
            <div class="menu_social">
                <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 32px; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'telegram']" style="font-size: 32px; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'vk']" style="font-size: 32px; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'square-instagram']" style="font-size: 32px; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 32px; cursor: pointer;" />
            </div>
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #fff; font-size: 32px; position: absolute; top: 12px; right: 10px; cursor: pointer; z-index: 101;" @click="isShowMenu = false" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                mediaWidth: innerWidth,
                isShowMenu: false
            }
        },
        methods: {
            handleResize() {
                this.mediaWidth = window.innerWidth;
            },
            async testGet() {
                try {
                    const response = await axios.get('http://192.168.0.102:3000/testroute');
                    if (response.status == 200) {
                        console.log(response.data)
                    } else {
                        console.log(response.data);
                    }
                }
                catch(error) {
                    console.log(`Ошибка ${error}`)
                }
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>
    .headmenu_main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .headmenu_div {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px 24px;
        background: #333;
        border: 1px solid #494949;
        border-radius: 50px;
        box-sizing: border-box;
    }
    .menus {
        display: flex;
        flex-direction: row;
        font-weight: 200;
    }
    .menus p {
        transition: all 160ms ease;
        padding: 6px 12px;
        cursor: pointer;
    }
    .button_div {
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
    .button_div img {
        object-fit: contain;
        width: 24px;
    }
    button {
        background: #4BC440;
        padding: 8px 24px;
        font-size: 16px;
        font-weight: 200;
        border: none;
        border-radius: 32px;
        color: #fff;
        cursor: pointer;
    }
    .menus p:hover {
        background: #515151;
        border-radius: 24px;
        transition: all 160ms ease;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    .headmenu_mobile {
        width: 100%;
        padding: 0px 10px;
        display: flex;
        justify-content: center;
    }
    .menu_mobile {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
    .menu_bar_main {
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        display: flex;
        justify-content: end;
    }
    .menu_bar {
        width: 65%;
        height: 100%;
        border-radius: 24px 0px 0px 24px;
        background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
        padding: 64px 12px;
        box-sizing: border-box;
        box-shadow: -4px -4px 12px 0px rgba(255, 255, 255, .25);
        position: relative;
    }
    .menu_bar p {
        font-size: 32px;
        font-weight: 700;
        line-height: 100%;
    }
    .menus_mobile {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 48px;
        text-align: end;
        cursor: pointer;
    }
    .menus_mobile p {
        font-size: 24px;
        line-height: 100%;
        font-weight: 200;
    }
    .menu_social {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-self: center;
    }
    * {
    box-sizing: border-box;
    }
</style>