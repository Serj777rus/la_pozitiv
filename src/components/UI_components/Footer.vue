<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="footer">
        <div class="footer_div">
            <div class="footer_left">
                <img src="@/assets/photos/logo.svg">
                <h2>Школа вокала и творчества</h2>
                <p>Привет. Свяжитесь с нами любым удобным способом или оставьте заявку и мы Вам перезвоним в ближайшее время</p>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'location-dot']" style="font-size: 24px;" />
                    <p>Россия, г. Москва, 3-я Хорошевская ул., 21 к2</p>
                </div>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 24px;" />
                    <p>example@example.com</p>
                </div>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'phone-volume']" style="font-size: 24px;" />
                    <p>+7(495) 777-77-77</p>
                </div>
            </div>
            <div class="footer_center">
                <p>Оставьте заявку</p>
                <form @submit.prevent="sendForm" class="footer_form">
                    <div class="inputs">
                        <label for="name">Имя</label>
                        <input v-model="footerform.name" id="name" type="text" name="name" required>
                    </div>
                    <div class="inputs">
                        <label for="name">Телефон</label>
                        <input v-model="footerform.phone" id="phone" type="text" name="phone" required>
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div class="footer_right">
                <p>Меню</p>
                <div class="menus">
                    <div class="menu">
                        <p>Главная</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div>
                    <div class="menu">
                        <p>Команда</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div>
                    <div class="menu">
                        <p>Направления</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div>
                    <div class="menu">
                        <p>Цены</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div>
                    <div class="menu">
                        <p>Педагоги</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div>
                </div>
                <div class="socials">
                    <font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 32px; cursor: pointer;" />
                    <font-awesome-icon :icon="['fab', 'telegram']" style="font-size: 32px; cursor: pointer;" />
                    <font-awesome-icon :icon="['fab', 'vk']" style="font-size: 32px; cursor: pointer;" />
                    <font-awesome-icon :icon="['fab', 'square-instagram']" style="font-size: 32px; cursor: pointer;" />
                    <font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 32px; cursor: pointer;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                footerform: {
                    name: '',
                    phone: ''
                }
            }
        }
        
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 140px;
        background: #333;
    }
    .footer_div {
        width: 1200px;
        display: flex;
        padding-top: 32px;
        padding-bottom: 24px;
        flex-direction: row;
        justify-content: space-between;
    }
    .footer_left {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
    }
    .footer_left img {
        width: 120px;
        object-fit: contain;
    }
    .photo_text_left {
        gap: 12px;
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
    }
    .footer_center {
        display: flex;
        width: 30%;
        flex-direction: column;
        gap: 32px;
    }
    .footer_center p {
        font-size: 24px;
        font-weight: 700;
    }
    .footer_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .inputs {
        display: flex;
        width: 100%;
        gap: 32px;
        font-size: 16px;
        font-weight: 700;
        align-items: center;
    }
    .inputs input {
        border: none;
        border-bottom: #fff 1px solid;
        background: transparent;
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 200;
        padding: 4px 12px;
    }
    .inputs input:focus {
        outline: none;
    }
    .footer_form button {
        padding: 8px 32px;
        border-radius: 4px;
        border: none;
        font-size: 16px;
        font-weight: 200;
        cursor: pointer;
    }
    .footer_right {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .footer_right p {
        font-size: 24px;
        font-weight: 700;
    }
    .menus {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
    }
    .menu {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
    .menu p {
        font-size: 16px;
    }
    .socials {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
        justify-content: center;
    }
</style>