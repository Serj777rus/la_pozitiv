<template>
    <div class="headmenu_main">
        <div class="headmenu_div">
            <img src="~@/assets/photos/logo.svg">
            <div class="menus">
                <router-link :to="{ name: 'home' }"><p>Главная</p></router-link>
                <router-link :to="{ name: 'education' }"><p>Направления</p></router-link>
                <p>Педагоги</p>
                <p>Наша жизнь</p>
                <p>Цены</p>
                <p>Контакты</p>
            </div>
            <div class="button_div">
                <font-awesome-icon :icon="['fab', 'whatsapp']" style="align-self: center; font-size: 32px; color: green; cursor: pointer;" />
                <font-awesome-icon :icon="['fab', 'vk']" style="color: #74C0FC; font-size: 32px; align-self: center; cursor: pointer;" />
                <button>Записаться</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
</style>