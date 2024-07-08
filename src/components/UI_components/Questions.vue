<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="quest_answ">
        <div class="quest_answ_div">
            <h2>Часто задаваемые вопросы</h2>
            <div class="quests" v-for="quest in questions" :key="quest.id">
                <div class="answ_plus_minus" @click="showAnsw(quest.id)">
                    <p>{{ quest.attributes.question }}</p>
                    <div class="plus" v-if="isShowAnswer == quest.id">+</div>
                    <div class="minus" v-else>-</div>
                </div>
                    <span :class="{active: isShowAnswer === quest.id}" class="answ">{{ quest.attributes.answer }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';



    export default {
        data() {
            return {
                questions: [],
                isShowAnswer: null
            }
        },
        methods: {
            showAnsw(id) {
            this.isShowAnswer = this.isShowAnswer === id ? null : id;
        },
        async getQuestion() {
            try {
                const response = await axios.get('http://192.168.0.102:3000/getquest');
                if (response.status == 200) {
                    this.questions = response.data.data;
                    console.log(response.data);
                } else {
                    console.log('Данные не найдены')
                }
            } catch (error) {
                console.log(`произошла ошибка ${error}`)
            }
        }
        },
        mounted() {
            this.getQuestion();
        }
    }
</script>

<style scoped>
    .quest_answ {
    margin-top: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.quest_answ_div {
    width: 1200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.quest_answ_div h2 {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 40px;
}
.quests {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
}
.answ_plus_minus {
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
    /* border: 1px solid #494949; */
    border-radius: 12px;
    align-self: flex-start;
    font-size: 20px;
    font-weight: 200;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
    line-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.answ {
    width: 1000px;
    max-height: 0; /* Начальное состояние */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
    border: none;
    border-radius: 0px 0px 12px 12px;
    font-weight: 200;
    position: relative;
    overflow: hidden; 
    transform: translateY(-100%);
    opacity: 0;
    z-index: 2;
    transition: all 500ms ease;
}
.active {
    max-height: 400px; /* Максимальная высота, при которой будет контент */
    padding: 8px 16px; /* Восстановить padding при активном состоянии */
    transform: translateY(0px);
    opacity: 1;
}
@media all and (max-width: 440px) {
    .quest_answ {
    margin-top: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
}
.quest_answ_div {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}
.quest_answ_div h2 {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 32px;
    text-align: center;
}
.quests {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
}
.answ_plus_minus {
    width: 100%;
    padding: 20px;
    border-radius: 12px;
    align-self: flex-start;
    font-size: 16px;
    font-weight: 200;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
    line-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.answ {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border: none;
    border-radius: 0px 0px 12px 12px;
    font-weight: 200;
    position: relative;
    z-index: 2;
}
}
</style>