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
                <Button type="submit"><slot>Отправить</slot></Button>
                <div class="message">{{ message }}</div>
            </form>
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #494949; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" @click="closePop" />
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue'
    import axios from 'axios';
    export default {
        components: {
            Button
        },
        data() {
            return {
                popupform: {
                    name: '',
                    phone: ''
                },
                message: ''
            }
        },
        methods: {
            closePop() {
                this.$emit('closePop')
            },
             async sendPopForm() {
                try {
                    const response = await axios.post('http://192.168.0.102:3000/sendform', this.popupform);
                    if (response.status == 201) {
                        this.message = 'Данные отправлены';
                        console.log(response.data);
                        this.popupform.name = '',
                        this.popupform.phone = '',
                        setTimeout(() => {
                            this.message = '';
                            this.closePop();
                        }, 1300)
                    } else {
                        this.message = `Ошибка ${response.data}`;
                    }
                } catch (error) {
                    console.log(error);
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
        gap: 48px;
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
</style>