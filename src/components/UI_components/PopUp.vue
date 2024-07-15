<template>
    <div class="popup">
        <div class="popup_modal">
            <div class="zagolovki">
                <p>Оставьте контакты</p>
                <h6>и мы обязательно свяжемся с вами, что бы подробно ответить на ваши вопросы</h6>
            </div>
            <form class="pop_form" @submit.prevent="sendPopForm">
                <div class="inputs">
                    <label for="name">Имя</label>
                    <input v-model="popupform.name" type="text" id="name" name="name" required>
                </div>
                <div class="inputs">
                    <label for="phone">Телефон</label>
                    <input v-model="popupform.phone" type="text" id="phone" name="phone" required>
                </div>
                <div class="inputs_sel">
                    <label for="phone">Возраст</label>
                    <select v-model="popupform.age" name="age" id="age" required>
                        <option value="Ребенок">Ребенок</option>
                        <option value="Взрослый">Взрослый</option>
                    </select>
                </div>
                <div class="inputs_sel">
                    <label for="phone">Программа обучения</label>
                    <select v-model="popupform.education" name="education" id="education" required>
                        <option value="Вокал">Вокал</option>
                        <option value="Вокал онлайн">Вокал онлайн</option>
                        <option value="Гитара">Гитара</option>
                        <option value="Электрогитара">Электрогитара</option>
                        <option value="Фортепиано">Фортепиано</option>
                        <option value="Сольфеджио">Сольфеджио</option>
                        <option value="Музыкальная литература">Музыкальная литература</option>
                        <option value="Звукозапись">Звукозапись</option>
                        <option value="Сценическое движение">Сценическое движение</option>
                    </select>
                </div>
                <button class="btns" type="submit">
                    <span :class="{ activ: buttonChange == 'wait' }">Отправить</span>
                    <div class="spinner" :class="{ active: buttonChange == 'sending' }">
                        <p class="btnsp">Отправляю</p>
                        <div class="spin"></div>
                    </div>
                    <h6 :class="{ actidone: buttonChange == 'done' }">Отправлено</h6>
                </button>
                <div class="message">{{ message }}</div>
            </form>
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #494949; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" @click="closePop" />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {

        data() {
            return {
                popupform: {
                    name: '',
                    phone: '',
                    age: '',
                    education: ''
                },
                message: '',
                buttonChange: 'wait',
                url: process.env.VUE_APP_SERVER
            }
        },
        methods: {
            closePop() {
                this.$emit('closePop')
            },
             async sendPopForm() {
                this.buttonChange = 'sending';
                try {
                    const response = await axios.post(`${this.url}/sendform`, this.popupform);
                    if (response.status == 200) {
                        this.buttonChange = 'done';
                        this.message = response.data.message;
                        console.log(response.data);
                        this.popupform.name = '',
                        this.popupform.phone = '',
                        this.popupform.age = '',
                        this.popupform.education = ''
                        setTimeout(() => {
                            this.message = '';
                            this.buttonChange = 'wait';
                            this.closePop();
                        }, 1500)
                    } else {
                        this.message = `Ошибка ${response.data}`;
                    }
                } catch (error) {
                    console.log('ощибка');
                }
            }
        }
    }
</script>

<style scoped>
    .popup {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, .7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 33;
    }
    .popup_modal {
        padding: 48px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 400px;
        background: #fff;
        border-radius: 24px;
        align-items: center;
    }
    .zagolovki {
        color: #494949;
    }
    .zagolovki p {
        font-size: 40px;
        font-weight: 900;
        text-align: center;
    }
    .zagolovki h6 {
        text-align: center;
        font-size: 16px;
        font-weight: 200;
    }
    .pop_form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    .inputs {
        position: relative;
        display: flex;
        width: 100%;
    }
    .inputs input {
        width: 100%;
        padding: 16px 12px;
        border: 1px solid #494949;
        border-radius: 8px;
    }
    .inputs label {
        position: absolute;
        color: #494949;
        padding: 4px 8px;
        background: #fff;
        font-size: 16px;
        top: -16px;
        left: 16px;
    }
    .message {
        color: green;
    }
    .inputs_sel {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: #494949;
        gap: 4px;
    }
    .inputs_sel label {
        padding-left: 20px;
        line-height: 100%;
    }
    .inputs_sel select {
        width: 100%;
        padding: 16px 12px;
        border-radius: 8px;
        border: 1px solid #494949;
    }
    .btns {
        width: 160px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-radius: 12px;
        border: none;
        background: -webkit-linear-gradient(90deg, #9f6cd3,#5ca1cb,#2bc7c4); background: linear-gradient(90deg, #9f6cd3,#5ca1cb,#2bc7c4) no-repeat;
        color: #fff;
        font-size: 16px;
        position: relative;
    }
    .btns span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(200%, -50%);
        transition: all 500ms ease;
    }
    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-150%, -50%);
        opacity: 0;
        transition: all 500ms ease;
        width: 140px;
        height: 40px;
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
        justify-content: center;
    }
    .spin {
        width: 20px;
        height: 20px;
        border-radius: 100px;
        border: 2px solid #FFCEC2;
        animation: rotate 1s infinite;
    }
    .spin::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 16px;
        border: none;
        background: #fff;
        position: absolute;
        top: 1px;
        left: 0;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .spinner.active {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
    .btns span.activ {
        transform: translate(-50%, -50%);
    }
    .btns h6 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(200%, -50%);
        transition: all 500ms ease;
        font-size: 16px;
        font-weight: 400;
    }
    .btns h6.actidone {
        transform: translate(-50%, -50%);
    }
</style>