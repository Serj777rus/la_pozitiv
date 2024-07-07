<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="quest_answ">
        <div class="quest_answ_div">
            <h2>Часто задаваемые вопросы</h2>
            <div class="quests" v-for="quest in questions" :key="quest.id">
                <div class="answ_plus_minus" @click="showAnsw(quest.id)">
                    <p>{{ quest.question }}</p>
                    <div class="plus" v-if="isShowAnswer == quest.id">+</div>
                    <div class="minus" v-else>-</div>
                </div>
                    <span :class="{active: isShowAnswer === quest.id}" class="answ">{{ quest.answer }}</span>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                questions: [{
                    id: 1,
                    question: 'Какие направления обучения вы предлагаете?',
                    answer: 'Мы предлагаем разнообразные музыкальные направления от 5 лет до 100, чтобы каждый наш ученик мог найти что-то по душе и развить свои таланты в уютной и поддерживающей атмосфере нашей студии. Наши направления: эстрадный, джазовый вокал, фортепиано, сольфеджио, музыкальная литература, акустическая гитара, электрогитара, сценическое движение , услуги звукозаписи. Регулярно в стенах студии проводим отчетные концерты и тематические музыкальные вечеринки.'
                },
                {
                    id: 2,
                    question: 'Смогу ли я, если мне 30+,40+,50+ освоить вокал и влияет ли возраст на скорость прогресса?',
                    answer: 'Если вы чувствуете себя творчески не реализованным, если мысли о пении не дают вам покоя – значит не поздно никогда. На вашу скорость прогресса, влияют природные данные, регулярность занятий и мотивация самого человека. Каждый возраст имеет свои особенности: у детей, например, голосовые связки могут быть более гибкими, что способствует быстрому улучшению техники пения. Однако это не означает, что взрослые не могут достичь высоких результатов. Взрослые часто обладают более развитым музыкальным слухом и опытом, что может помочь им быстрее усваивать технические аспекты вокального искусства. С правильным подходом и усердием вы сможете достичь своих целей в пении независимо от возраста.'
                },
                {
                    id: 3,
                    question: 'Нужна ли своя гитара для занятий?',
                    answer: 'Желательно иметь свою гитару для домашних занятий, но если у вас еще нет инструмента, то наш педагог с удвольствием поможем вам выбрать подходящую модель, и предоставим инструмент на время занятий в студии.'
                },
                {
                    id: 4,
                    question: 'Хочу отдать ребенка на фортепиано, но не решаюсь сейчас купить дорогой инструмент, если варианты?',
                    answer: 'По словам нашего педагога по фортепиано, то на первые полгода проверит свои силы можно обойтись портативным складным электронным пианино на 61 клавишу и на 88 клавиш (стоимость 3-5 тыс). Далее учитель посоветует присмотреться к синтезаторам фирмы Casio или Yamaha (30 до 50 тыс). Если вы уже укрепились в выборе освоить инструмент, педагог порекомендует цифровое пианино. На нем вы сможете сыграть любое произведение, Вам хватит клавиш, плюс звук будет максимально похож на живой инструмент. Они созданы как бы на замену аналоговому инструменту. В них тоже 88 клавиш и производители цифровым способом стараются воспроизвести механизм звукоизвлечения Клавиатура на ощупь очень похожа на клавиатуру настоящего фортепиано. По сравнению с живым инструментом цифровые пианино занимают меньше места, на них можно играть в наушниках , ну и плюс там есть возможность поменять «упругость» клавиатуры и немного — характер звучания пианино.'
                },
                {
                    id: 5,
                    question: 'Почему после занятия такое классное настроение?',
                    answer: 'Каждое занятие в нашей студии — это маленький праздник. Регулярные уроки приносят видимый прогресс: исполнив сложное место в песне, вы получаете мощный выброс серотонина и дофамина, и буквально парите на крыльях счастья. Общение с педагогом и эмоциональная связь превращают уроки в любимый ритуал, который наполняет вашу жизнь яркими красками и незабываемыми эмоциями. Это не просто обучение, это магия творчества и уверенность в своих силах!'
                }],
                isShowAnswer: null
            }
        },
        methods: {
            showAnsw(id) {
            this.isShowAnswer = this.isShowAnswer === id ? null : id;
        }
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