<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu></HeadMenu>
    <div class="main_main">
        <div class="main_div">
            <h2>ШКОЛА ВОКАЛА</h2>
            <div class="utp">
                <div class="left_utp">
                    <ul>
                        <li>Индивидуальный подход к каждому голосу</li>
                        <li>Практика выступлений на сцене</li>
                        <li>Авторские методики, результат после 8 урока</li>
                        <li>Ваши музыкальные предпочтения в приоритете</li>
                    </ul>
                </div>
                <div class="right_utp">
                    <ul>
                        <li>Профессиональная запись в стенах студии</li>
                        <li>Участие в теплых концертах в стенах студии</li>
                        <li>Профессиональное оборудование и все условия для комфортного обучения</li>
                        <li>Атмосфера красоты и уюта</li>
                    </ul>
                </div>
            </div>
            <div class="slogan">
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <Button @click="showPop"><slot>Пробное занятие</slot></Button>
        </div>
        <img src="@/assets/photos/girl_main.png">
    </div>
    <div class="mission">
        <div class="cards" v-for="card in weare" :key="card.tab" v-show="isShowCard == card.id">
            <div class="card">
                <div class="img_block">
                    <img :src="card.img">
                </div>
                <div class="descript_card">
                    <h3>{{ card.zglvk }}</h3>
                    <p>{{ card.description }}</p>
                    <div class="tabs">
                        <button class="tabBtn" v-for="tab in weare" :key="tab.id" @click="showCard(tab.id)" :id="tab.id" :class="{ active: isShowCard == tab.id }">{{ tab.tab }}</button>
                    </div>
                    <Button @click="showPop"><slot>Хочу петь!</slot></Button>
                </div>
             </div>
        </div>
    </div>
    <div class="about_school">
        <div class="about_div">
            <h3>Наша школа</h3>
            <p>Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль</p>
            <div class="photo_video">
                <div class="about_video">
                    <div class="video_text">
                        <h3>Видеообзор</h3>
                    </div>
                    <video src="@/assets/videos/about_video.mp4" controls poster="@/assets/photos/poster.png"></video>
                </div>
                <div class="about_photo">
                    <div class="video_text">
                        <h3>Фото нашей студии</h3>
                    </div>
                    <div class="carusel" v-for="img in aboutphoto" :key="img.id" :class="{ activec: isShowPhoto == img.id }">
                        <img :src="img.img">
                        <div class="carusel_tab_prew" @click="tabsPrew">
                            <img src="@/assets/photos/about/prew.svg">
                        </div>
                        <div class="carusel_tab_next" @click="tabsNext">
                            <img src="@/assets/photos/about/next.svg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dop_utp">
        <div class="dop_utp_div">
            <div class="utp_div">
                <h3>
                    Творческое окружение
                </h3>
                <h4>
                    Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь
                </h4>
            </div>
            <div class="utp_div">
                <h3>
                    Творческая атмосфера
                </h3>
                <h4>
                    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём
                </h4>
            </div>
            <div class="utp_div">
                <h3>
                    Чуткие преподаватели
                </h3>
                <h4>
                    Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений
                </h4>
            </div>
        </div>
    </div>
    <div class="for_who">
        <div class="for_who_div">
            <div class="zglvk">
                <h3>Кому подойдет</h3>
                <h4>Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль</h4>
            </div>
            <div class="who_all_blocks">
                <div class="for_who_block">
                    <div class="who_img">
                        <img src="../assets/photos/for_who/girl.png">
                    </div>
                    <div class="who_text">
                        <h3>Дети от 3-х лет</h3>
                        <h4>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</h4>
                        <Button @click="showPop"><slot>Хочу попробовать!</slot></Button>
                    </div>
                </div>
                <div class="for_who_block">
                    <div class="who_img">
                        <img src="../assets/photos/for_who/podrostok.png">
                    </div>
                    <div class="who_text">
                        <h3>Подростки</h3>
                        <h4>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</h4>
                        <Button @click="showPop"><slot>Хочу попробовать!</slot></Button>
                    </div>
                </div>
                <div class="for_who_block">
                    <div class="who_img">
                        <img src="../assets/photos/for_who/man_woman.png">
                    </div>
                    <div class="who_text">
                        <h3>Дети от 3-х лет</h3>
                        <h4>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.</h4>
                        <Button @click="showPop"><slot>Хочу попробовать!</slot></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Posts></Posts>
    <div class="concert_video">
        <div class="concert_video_div">
            <h3>Наши концерты</h3>
            <video src="../assets/videos/about_video.mp4" controls></video>
        </div>
    </div>
    <Questions></Questions>
    <ReviewCard></ReviewCard>
    <Vidget></Vidget>
    <Footer></Footer>
    <PopUp v-show="isShowPopUp" @closePop="closePop"></PopUp>
    <FixBtn></FixBtn>
</template>

<script>
    import HeadMenu from './UI_components/HeadMenu.vue'
    import Button from './UI_components/Button.vue'
    import Posts from './UI_components/Posts.vue'
    import Questions from './UI_components/Questions.vue'
    import ReviewCard from './UI_components/ReviewCard.vue'
    import Footer from './UI_components/Footer.vue'
    import PopUp from './UI_components/PopUp.vue'
    import FixBtn from './UI_components/FixBtn.vue'
    import Vidget from './UI_components/Vidget.vue'
    export default {
        components: {
            HeadMenu,
            Button,
            Posts,
            Questions,
            ReviewCard,
            Footer,
            PopUp,
            FixBtn,
            Vidget
        },
        data() {
            return {
                weare: [{
                    id: 1,
                    zglvk: 'Наша история и миссия',
                    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '5'
                },
                {
                    id: 2,
                    zglvk: 'Наша история и миссия',
                    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '10'
                },
                {
                    id: 3,
                    zglvk: 'Наша история и миссия',
                    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '80'
                },
                {
                    id: 4,
                    zglvk: 'Наша история и миссия',
                    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '200'
                },
                {
                    id: 5,
                    zglvk: 'Наша история и миссия',
                    description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '10'
                }],
                aboutphoto: [{
                    id: 1,
                    img: require ('@/assets/photos/about/_MG_8358.jpg')
                },
                {
                    id: 2,
                    img: require ('@/assets/photos/about/_MG_8497.jpg')
                },
                {
                    id: 3,
                    img: require ('@/assets/photos/about/_MG_8586.jpg')
                },
                {
                    id: 4,
                    img: require ('@/assets/photos/about/_MG_8654.jpg')
                }],
                isShowCard: 1,
                isShowPhoto: 1,
                isShowPopUp: false,
            }
        },
        methods: {
            showCard(id) {
                this.isShowCard = id;
            },
            tabsPrew() {
                this.isShowPhoto -= 1;
                if (this.isShowPhoto == 0) {
                    this.isShowPhoto = this.aboutphoto[this.aboutphoto.length - 1].id;
                }
            },
            tabsNext() {
                this.isShowPhoto += 1;
                if (this.isShowPhoto >= this.aboutphoto.length + 1) {
                    this.isShowPhoto = this.aboutphoto[0].id;
                }
            },
            showPop() {
                this.isShowPopUp = true
            },
            closePop() {
                this.isShowPopUp = false
            }
        }
    }
</script>

<style scoped>
.main_main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    position: relative;
}
.main_main img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    height: 500px;
    object-fit: contain;
}
.main_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(../assets/photos/let_fonar.png) top left/514px no-repeat,
                url(../assets/photos/right_fonar.png) top right/514px no-repeat,
                linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%) top left/100% 100% no-repeat;
    border: 2px solid #4a4a4a;
    border-radius: 50px;
    padding-bottom: 24px;
}
.main_div button {
    z-index: 3;
}
.main_div h2 {
    margin-top: 80px;
    font-size: 132px;
    font-weight: 900;
    color: #FFCEC2;
}
.utp {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 32px;
    z-index: 3;
}
.left_utp {
    padding-left: 48px;
    width: 400px;
}
.left_utp ul li {
    margin-top: 8px;
}
.right_utp {
    padding-right: 48px;
    width: 400px;
}
.right_utp ul li {
    margin-top: 8px;
}
.slogan {
    width: 800px;
    padding: 16px 32px;
    border-radius: 32px;
    background: rgb(0,0,0, 0.7);
    margin-top: 48px;
    margin-bottom: 24px;
    z-index: 3;
}
.slogan p {
    text-align: center;
    font-size: 16px;
    font-weight: 200;
}
.tabBtn {
    padding: 4px 8px;
    cursor: pointer;
}
.mission {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 140px;
}
.cards {
    width: 1200px;
    display: flex;
}
.card {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: space-between;
}
.img_block {
    width: 600px;
    height: 440px;
    background: #333;
    border-radius: 32px;
    border: 1px solid #494949;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.img_block img {
    border-radius: 22px;
    height: 100%;
    width: 580px;
    object-fit: cover;
}
.descript_card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    align-items: start;
}
.descript_card h3 {
    font-size: 48px;
    font-weight: 300;
}
.descript_card p {
    font-size: 16px;
    font-weight: 200;
}
.tabs {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
}
.tabBtn {
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-weight: bolder;
    border-radius: 16px;
    border: 1px solid #494949;
    background: #333;
    color: #fff;
    transition: all 300ms ease;
}
.active {
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    color: #fff;
    width: 80px;
    height: 80px;
}
.about_school {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 140px;
}
.about_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.about_div h3 {
    font-size: 48px;
    font-weight: 700;
}
.about_div p {
    font-size: 20px;
    font-weight: 400;
    width: 550px;
}
.photo_video {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 28px;
}
.about_video {
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    border-radius: 32px;
}
video {
    border-radius: 32px;
    width: 550px;
}
.video_text {
    width: 100%;
}
.video_text h3 {
    font-size: 32px;
    font-weight: bolder;
    text-align: center;
}
.about_photo {
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}
.carusel {
    position: relative;
    display: flex;
    width: 100%;
    display: none;
}
.carusel img {
    width: 550px;
    height: 308px;
    object-fit: cover;
    border-radius: 32px;
}
.activec {
    display: block;
}
.carusel_tab_prew {
    position: absolute;
    top: 50%;
    left: -240px;
    transform: translateY(-50%);
}
.carusel_tab_prew img {
    height: 64px;
    object-fit: contain;
    cursor: pointer;
}
.carusel_tab_next {
    position: absolute;
    top: 50%;
    right: -240px;
    transform: translateY(-50%);
}
.carusel_tab_next img {
    height: 64px;
    object-fit: contain;
    cursor: pointer;
}
.carusel_tab_next img:hover {
    transform: scale(1.1);
    transition: all 300ms ease;
}
.carusel_tab_prew img:hover {
    transform: scale(1.1);
    transition: all 300ms ease;
}
.dop_utp {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
}
.dop_utp_div {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.utp_div {
    width: 360px;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 32px;
    padding: 20px 16px;
    border: 1px solid #494949;
    background: url('../assets/photos/dop_utp/man_sing.png') bottom right/240px 300px no-repeat,
            url('../assets/photos/dop_utp/О.svg') center center/285px 252px no-repeat,
            #333;
    box-sizing: border-box;
}
.utp_div h3 {
    font-size: 32px;
    font-weight: 700;
}
.utp_div h4 {
    font-size: 16px;
    font-weight: 400;
}
.utp_div:nth-child(2) {
    background: url('../assets/photos/dop_utp/guitar.png') bottom center/340px 200px no-repeat,
            url('../assets/photos/dop_utp/А.svg') center center/285px 252px no-repeat,
            #333;
}
.utp_div:nth-child(3) {
    background: url('../assets/photos/dop_utp/hor.png') bottom center/300px 199px no-repeat,
            url('../assets/photos/dop_utp/П.svg') center center/285px 252px no-repeat,
            #333;
}
.for_who {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
}
.for_who_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
}
.zglvk {
    gap: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.zglvk h3 {
    font-size: 48px;
    font-weight: 900;
}
.zglvk h4 {
    font-size: 16px;
    font-weight: 400;
}
.who_all_blocks {
    gap: 80px;
    display: flex;
    flex-direction: column;
}
.for_who_block {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
}
.for_who_block:nth-child(2) {
    flex-direction: row-reverse;
}
.who_img {
    padding: 10px;
    border-radius: 50px;
    background: #333;
    border: 1px solid #494949;
    display: flex;
    justify-content: center;
    align-items: center;
}
.who_img img {
    width: 580px;
    height: 380px;
}
.who_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}
.who_text h3 {
    font-size: 32px;
    font-weight: 700;
}
.who_text h4 {
    font-size: 16px;
    font-weight: 400;
}
.concert_video {
    width: 100%;
    margin-top: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.concert_video_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
}
.concert_video_div h3 {
    font-size: 48px;
    font-weight: 900;
    line-height: 100%;
    margin-bottom: 40px;
}
.concert_video_div video {
    width: 100%;
    margin-top: 40px;
}
@media all and (max-width: 430px) {
    .main_main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
    position: relative;
    padding: 0px 10px;
}
.main_main img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    height: 500px;
    object-fit: contain;
}
.main_div {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%) top left/100% 100% no-repeat;
    border: 2px solid #4a4a4a;
    border-radius: 50px;
    padding-bottom: 24px;
}
.main_div button {
    z-index: 3;
}
.main_div h2 {
    margin-top: 40px;
    font-size: 42px;
    font-weight: 900;
    color: #FFCEC2;
}
.utp {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 32px;
    z-index: 3;
    display: none;
}
.left_utp {
    padding-left: 48px;
    width: 400px;
}
.left_utp ul li {
    margin-top: 8px;
}
.right_utp {
    padding-right: 48px;
    width: 400px;
}
.right_utp ul li {
    margin-top: 8px;
}
.slogan {
    width: 80%;
    padding: 16px 32px;
    border-radius: 32px;
    background: rgb(0,0,0, 0.7);
    margin-top: 48px;
    margin-bottom: 24px;
    z-index: 3;
}
.slogan p {
    text-align: center;
    font-size: 12px;
    font-weight: 200;
}
.tabBtn {
    padding: 4px 8px;
    cursor: pointer;
}
.mission {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-top: 140px;
    padding: 0px 10px;
}
.cards {
    width: 100%;
    display: flex;
}
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.img_block {
    width: 100%;
    background: #333;
    border-radius: 32px;
    border: 1px solid #494949;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.img_block img {
    border-radius: 22px;
    width: 100%;
    object-fit: cover;
}
.descript_card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;
    align-items: start;
}
.descript_card h3 {
    font-size: 32px;
    font-weight: 300;
}
.descript_card p {
    font-size: 12px;
    font-weight: 200;
}
.tabs {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    gap: 12px;
    align-items: center;
    width: 100%;
}
.tabBtn {
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bolder;
    border-radius: 8px;
    border: 1px solid #494949;
    background: #333;
    color: #fff;
}
.active {
    background: linear-gradient(45deg, #1A1A1A 0%, #374084 50%, #822872 100%);
    color: #fff;
    width: 48px;
    height: 48px;
}
.about_school {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 140px;
    padding: 0px 10px;
}
.about_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.about_div h3 {
    font-size: 32px;
    font-weight: 700;
}
.about_div p {
    font-size: 12px;
    font-weight: 400;
    width: 100%;
}
.photo_video {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 28px;
}
.about_video {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    border-radius: 16px;
}
video {
    border-radius: 16px;
    width: 100%;
    background-size: 100% 100%;
}
.video_text {
    width: 100%;
}
.video_text h3 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}
.about_photo {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}
.carusel {
    position: relative;
    display: flex;
    width: 100%;
    display: none;
}
.carusel img {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
}
.activec {
    display: block;
}
.carusel_tab_prew {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}
.carusel_tab_prew img {
    height: 40px;
    object-fit: contain;
    cursor: pointer;
}
.carusel_tab_next {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
.carusel_tab_next img {
    height: 40px;
    object-fit: contain;
    cursor: pointer;
}
.carusel_tab_next img:hover {
    transform: scale(1.1);
    transition: all 300ms ease;
}
.carusel_tab_prew img:hover {
    transform: scale(1.1);
    transition: all 300ms ease;
}
.dop_utp {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    padding: 0px 10px;
}
.dop_utp_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
.utp_div {
    width: 90%;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 32px;
    padding: 20px 16px;
    border: 1px solid #494949;
    background: url('../assets/photos/dop_utp/man_sing.png') bottom right/240px 300px no-repeat,
            url('../assets/photos/dop_utp/О.svg') center center/285px 252px no-repeat,
            #333;
    box-sizing: border-box;
}
.utp_div h3 {
    font-size: 24px;
    font-weight: 700;
}
.utp_div h4 {
    font-size: 16px;
    font-weight: 400;
}
.utp_div:nth-child(2) {
    background: url('../assets/photos/dop_utp/guitar.png') bottom center/340px 200px no-repeat,
            url('../assets/photos/dop_utp/А.svg') center center/285px 252px no-repeat,
            #333;
}
.utp_div:nth-child(3) {
    background: url('../assets/photos/dop_utp/hor.png') bottom center/300px 199px no-repeat,
            url('../assets/photos/dop_utp/П.svg') center center/285px 252px no-repeat,
            #333;
}
.for_who {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    padding: 0px 10px;
}
.for_who_div {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.zglvk {
    gap: 8px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.zglvk h3 {
    font-size: 32px;
    font-weight: 900;
}
.zglvk h4 {
    font-size: 12px;
    font-weight: 400;
}
.who_all_blocks {
    gap: 40px;
    display: flex;
    flex-direction: column;
}
.for_who_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.for_who_block:nth-child(2) {
    flex-direction: column;
}
.who_img {
    padding: 10px;
    border-radius: 32px;
    background: #333;
    border: 1px solid #494949;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
}
.who_img img {
    width: 100%;
    object-fit: cover;
    border-radius: 22px;
}
.who_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 12px;
}
.who_text h3 {
    font-size: 24px;
    font-weight: 700;
}
.who_text h4 {
    font-size: 16px;
    font-weight: 200;
}
.concert_video {
    width: 100%;
    margin-top: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
}
.concert_video_div {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.concert_video_div h3 {
    font-size: 32px;
    font-weight: 900;
    line-height: 100%;
    text-align: center;
}
.concert_video_div video {
    width: 100%;
}
* {
    box-sizing: border-box;
}
}
</style>