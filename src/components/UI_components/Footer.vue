<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="footer">
        <div class="footer_div">
            <div class="footer_left">
                <img src="@/assets/photos/logo80x80.png">
                <h2>Школа вокала и творчества<br>"Ля Позитив"</h2>
                <p>ИП ЧЕРЕМИСИНА ЕЛЕНА ВАСИЛЬЕВНА<br>ИНН 212905574769<br>ОГРН 319774600318063</p>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'location-dot']" style="font-size: 24px;" />
                    <p>Россия, г. Москва, 3-я Хорошевская ул., 21 к2</p>
                </div>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'envelope']" style="font-size: 24px;" />
                    <p>vocal@la-pozitiv.ru</p>
                </div>
                <div class="photo_text_left">
                    <font-awesome-icon :icon="['fas', 'phone-volume']" style="font-size: 24px;" />
                    <p>+7 (968) 921-39-07</p>
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
                    <div class="inputs_sel">
                        <label for="phone">Возраст</label>
                        <select>
                            <option value="Ребенок">Ребенок</option>
                            <option value="Подросток">Подросток</option>
                            <option value="Взрослый">Взрослый</option>
                        </select>
                    </div>
                    <div class="inputs_sel">
                        <label for="phone">Программа обучения</label>
                        <select>
                            <option value="Вокал">Вокал</option>
                            <option value="Вокал онлайн">Вокал онлайн</option>
                            <option value="Гитара">Гитара</option>
                            <option value="Электрогитара">Электрогитара</option>
                            <option value="Фортепиано">Фортепиано</option>
                            <option value="Сольфеджио">Сольфеджио</option>
                            <option value="Музыкальная литература">Музыкальная литература</option>
                            <option value="Звукозапись">Звукозапись</option>
                        </select>
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div class="footer_right">
                <p>Меню</p>
                <div class="menus">
                    <router-link :to="{ name: 'home' }"><div class="menu">
                        <p>Главная</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div></router-link>
                    <router-link :to="{ name: 'teachers' }"><div class="menu">
                        <p>Команда</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div></router-link>
                    <router-link :to="{ name: 'education' }"><div class="menu">
                        <p>Направления</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div></router-link>
                    <router-link :to="{ name: 'price' }"><div class="menu">
                        <p>Цены</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div></router-link>
                    <router-link :to="{ name: 'concerts' }"><div class="menu">
                        <p>Наша жизнь</p>
                        <img src="@/assets/photos/footer/arrows.svg">
                    </div></router-link>
                </div>
                <div class="socials">
                    <a href="https://wa.me/79689213907" target="_blank"><font-awesome-icon :icon="['fab', 'whatsapp']" style="font-size: 32px; cursor: pointer;" /></a>
                    <a href="https://t.me/+79689213907" target="_blank"><font-awesome-icon :icon="['fab', 'telegram']" style="font-size: 32px; cursor: pointer;" /></a>
                    <a href="https://vk.com/la_pozitiv" target="_blank"><font-awesome-icon :icon="['fab', 'vk']" style="font-size: 32px; cursor: pointer;" /></a>
                    <font-awesome-icon :icon="['fab', 'square-instagram']" style="font-size: 32px; cursor: pointer;" />
                    <a href="https://www.youtube.com/channel/UC-iB3N4cTpyCtjpgSowge6A" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 32px; cursor: pointer;" /></a>
                </div>
                <div class="dogovor">
                    <a href="#" target="_blank">Договор оферты</a>
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
        background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
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
        width: 80px;
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
    .inputs_sel {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: center;
    }
    .inputs_sel select {
        padding: 4px 12px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #fff;
        border-radius: 4px;
        background: transparent;
        color: #fff;
    }
    select:focus {
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
    a {
        text-decoration: none;
        color: #fff;
    }
    .dogovor {
        align-self: end;
    }
    @media all and (max-width: 440px) {
        .footer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 140px;
        padding: 0px 10px;
    }
    .footer_div {
        width: 100%;
        display: flex;
        padding-top: 32px;
        padding-bottom: 24px;
        flex-direction: column;
        gap: 40px;
    }
    .footer_left {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
    }
    .footer_left img {
        width: 80px;
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
        width: 100%;
        flex-direction: column;
        gap: 32px;
    }
    .footer_center p {
        font-size: 24px;
        font-weight: 900;
        text-align: center;
    }
    .footer_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .footer_right p {
        font-size: 24px;
        font-weight: 700;
        display: none;
    }
    .menus {
        width: 100%;
        display: none;
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
        display: none;
    }
    .socials {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
        justify-content: center;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    * {
    box-sizing: border-box;
}
    }
</style>