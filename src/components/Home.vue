<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeadMenu></HeadMenu>
    <!-- <div class="main_main">
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
    </div> -->
    <div class="main_main">
        <div class="main_div">
            <div class="right_side_main">
                <h2>ШКОЛА ВОКАЛА<br>И ТВОРЧЕСТВА</h2>
                <div class="slogan">
                    <p>Ваш успех начинается здесь, в месте, где живет творчество, красота и позитив!</p>
                </div>
                <Button class="btn" @click="showPop"><slot>Пробное занятие</slot></Button>
            </div>
            <div class="photomain_div">
                <img src="@/assets/photos/girl_main.png">
            </div>
        </div>
        <div class="utp_main">
            <div class="utp">
                <p>&#9989;</p>
                <h3>Индивидуальный подход к каждому голосу</h3>
            </div>
            <div class="utp">
                <p>&#9989;</p>
                <h3>Практика выступлений на сцене</h3>
            </div>
            <div class="utp">
                <p>&#9989;</p>
                <h3>Профессиональная запись в стенах студии</h3>
            </div>
            <div class="utp">
                <p>&#9989;</p>
                <h3>Профессиональное оборудование</h3>
            </div>
        </div>
        <div class="backimg">
            <img src="../assets/photos/backpic.png">
        </div>
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
                    Мы создаем, теплое творческое сообщество, где каждый ученик взаимодействует с
                    единомышленниками, обменивается эмоциями, чувствами, находит дружескую поддержку и источник
                    позитивных эмоций на развитие и рост.
                </h4>
            </div>
            <div class="utp_div">
                <h3>
                    Творческая атмосфера
                </h3>
                <h4>
                    В студии царит атмосфера творчества, красоты и желание вдохновлять! Пространство, где каждый
                    ученик чувствует себя особенным и талантливым! А это и есть ключ для большего раскрытия
                    творческого потенциала и личностного успеха!
                </h4>
            </div>
            <div class="utp_div">
                <h3>
                    Чуткие преподаватели
                </h3>
                <h4>
                    Вас встретят творческие и вдохновляющие наставники, которые используют персональный подход к
                    каждому ученику, учитывая его потенциальные возможности и потребности. Благодаря этому ученики
                    быстро прогрессируют и достигают впечатляющих результатов.
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
                        <h3>Дети от 5-х лет</h3>
                        <h4>Индивидуальные уроки музыки особенно полезны для детей от 5 лет, поскольку позволяют учителю
                            адаптировать программу обучения под индивидуальные способности ребенка.
                            Зачем заниматься музыкой ребенку?
                            Во-первых, это отличный способ развития интеллекта. Исследования показывают, что музыка
                            способствует улучшению памяти, концентрации внимания и творческого мышления,
                            метаматематических навыков. Мелодия, ритм, гармония, лад – эти составляющие музыки имеют
                            четкую структурную организацию, в чем и схожа с математикой.
                            Во-вторых, игра на музыкальном инструменте или пение развивают мелкую моторику и координацию
                            движений.
                            В третьих при занятиях музыкой ребенок знакомится с ее свойствами, структурой, интонациями и
                            выразительностью, и его речь становится более грамотной, структурированной и выразительной.
                            Музыкант тоньше различает оттенки речи других людей, а значит, улучшаются его
                            коммуникативные навыки.
                            В итоге, занимаясь музыкой, ребенок не только учится мыслить и воспринимать мир иначе, но и
                            развивает множество полезных качеств личности. Музыка способствует формированию
                            дисциплины, уверенности в своих силах, а также навыков коммуникации и взаимодействия. Эти
                            качества положительно скажутся на будущем ребенка, помогая ему успешно адаптироваться в
                            обществе и достигать поставленных целей.</h4>
                        <Button @click="showPop"><slot>Хочу попробовать!</slot></Button>
                    </div>
                </div>
                <div class="for_who_block">
                    <div class="who_img">
                        <img src="../assets/photos/for_who/podrostok.png">
                    </div>
                    <div class="who_text">
                        <h3>Подростки</h3>
                        <h4>Подросткам занятия музыкой могут принести много пользы. В период взросления очень важно найти
                            свой путь и понять, кто ты есть. Занятия музыкой помогают подросткам выразить свои мысли и чувства
                            через творчество. Этот возраст настолько богат сильными эмоциями, что их просто невозможно не
                            выражать. Подросток сам себя лечит прослушиванием, сочинением, исполнением композиций.
                            Именно в подростковом возрасте, многие выдающиеся музыканты написали свои первые произведения.
                            Подростки, получающие музыкальное развитие, повышают самооценку и снижают депрессивные
                            мысли. Они также значительно улучшают свои коммуникативные и интерактивные навыки. С помощью
                            музыки и текстов песен они учатся распознавать свои эмоции и чувства, учатся видеть оттенки между
                            белым и черным. Музыка расширяет горизонты и развивает любопытство.
                            С ее помощью подростки путешествуют в разных мирах, серфят соседние галактики.
                            В итоге, музыка - лучшая терапия для взрослеющих детей. Она помогает проживать как худшие, так
                            и лучшие моменты подростковой жизни, а мы можем использовать ее как инструмент, чтобы лучше
                            понять наших детей и помочь им сделать лучший выбор.</h4>
                        <Button @click="showPop"><slot>Хочу попробовать!</slot></Button>
                    </div>
                </div>
                <div class="for_who_block">
                    <div class="who_img">
                        <img src="../assets/photos/for_who/man_woman.png">
                    </div>
                    <div class="who_text">
                        <h3>Дети от 3-х лет</h3>
                        <h4>С возрастом мы приобретаем опыт, но порой нам не хватает свежих эмоций. Музыка способна вернуть
                            радость и снять стресс, наполнив жизнь новыми красками.
                            Занятия музыкой - идеальный способ для взрослых отдохнуть от повседневных забот. Мозг
                            расслабляется и находит неожиданные решения. Прожить эмоциональные переживания через музыку и
                            освободиться от психологических зажимов.
                            Музыка развивает мышление, внимание и память, помогая мозгу оставаться молодым и активным, а
                            занятия вокалом помогают увеличить объем легких, развить силу дыхательных мышц. Человек
                            становится физически более выносливым.
                            Музыка позволяет проявить себя, удивить окружающих и повысить самооценку, открывая новые
                            горизонты.
                            В итоге, музыка для взрослых - это не только возможность испытать непередаваемые эмоции, но и
                            способ лучше узнать себя, прочувствовать свою уникальность. Музыка -это мощный инструмент,
                            который может значительно улучшить качество жизни взрослых, внести гармонию и радость в их
                            повседневность.</h4>
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
                    description: 'Наша миссия - делать людей чуточку счастливее, помогая людям всех возрастов раскрыть свой творческий потенциал и насладиться миром музыки. Мы создаём атмосферу, где каждый может найти своё увлечение, обучаясь вокалу, игре на гитаре или фортепиано, и где семейные ценности и традиции передаются от поколения к поколению. Наша студия - это место, где творчество и позитивные эмоции объединяются, чтобы помочь людям достичь новых высот в своём музыкальном развитии и стать чуточку счастливее!',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '5'
                },
                {
                    id: 2,
                    zglvk: 'Наши программы',
                    description: '2)Наши программы обучения разработаны на основе опыта наших учителей, методик своих наставников и звездных педагогов . Проверенные на себе и в современно востребованы. Для нас важны потребности и интересы каждого ученика, поэтому наши программы гибкие и могут быть адаптированы под конкретные задачи и мечты. В процессе обучения мы уделяем внимание не только технике, но и творческому потенциалу. Поэтому наши ученики получают не только знания и навыки, но и возможность самовыражения через музыку. А если вы думаете, что это звучит слишком серьёзно, то помните, мы вас поддержим улыбкой и позитивным настроем!',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '9'
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
                    zglvk: 'Наши ученики',
                    description: 'За пять лет работы нашей школы мы можем с гордостью отметить значительный прогресс и рост наших учеников. Они стали увереннее и амбициознее проявляться на отчетных концертах и музыкальных вечеринках студии. Улучшили свои навыки в учебе, продвинулись по карьерной лестнице, успешно выступили на различных конкурсах и фестивалях. Мы рады видеть, как наши ученики развиваются и достигают новых высот в своем творчестве, становясь профессиональными музыкантами и продолжая свой путь в мире музыки.',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '200'
                },
                {
                    id: 5,
                    zglvk: 'Наши преподаватели',
                    description: 'Наши учителя - это не просто профессионалы своего дела, но и успешные, яркие, креативные артисты и музыканты, победители различных современных конкурсов, таких как &quot;Голос&quot;, &quot;Новая волна&quot; и другие. Они создают атмосферу, где каждый ученик может чувствовать себя комфортно и свободно выражать себя. Их энергия и страсть к музыке вдохновляют и мотивируют наших учеников, разжигает огонь творчества и блеск в глазах!.',
                    img: require ('@/assets/photos/_MG_8245bg.jpeg'),
                    tab: '6'
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    position: relative;
    gap: 32px;
}
.backimg {
    position: absolute;
    top: 56%;
    left: 50%;
    animation: imgrotate 2s infinite;
}
@keyframes imgrotate {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.main_div {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    border-radius: 50px;
    padding: 0px 32px;
    box-sizing: border-box;
}
.right_side_main {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 48px;
}
.right_side_main h2 {
    font-size: 96px;
    font-weight: 900;
    color: #FFCEC2;
    line-height: 100%;
}
.slogan {
    line-height: 100%;
}
.photomain_div {
    display: flex;
    align-self: flex-end;
}
.utp_main {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
}
.utp {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    box-sizing: border-box;
    padding: 8px 12px;
    align-items: center;
    background: transparent;
    border: 2px solid #f5edf0;
    border-radius: 32px;
    gap: 12px;
}
.utp p {
    font-size: 24px;
}

/* .main_main img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    height: 500px;
    object-fit: contain;
} */
/* .main_div {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(../assets/photos/let_fonar.png) top left/514px no-repeat,
                url(../assets/photos/right_fonar.png) top right/514px no-repeat;
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding-bottom: 24px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
}
.main_div button {
    z-index: 3;
}
.main_div h2 {
    margin-top: 80px;
    font-size: 132px;
    font-weight: 900;
    color: #FFCEC2;
} */
/* .utp {
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
} */
/* .slogan {
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
} */
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
    /* border: 1px solid #494949; */
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
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
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    transition: all 300ms ease;
}
.active {
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;;
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
            rgba(0, 0, 0, .5);
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
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
            rgba(0, 0, 0, .5);
}
.utp_div:nth-child(3) {
    background: url('../assets/photos/dop_utp/hor.png') bottom center/300px 199px no-repeat,
            url('../assets/photos/dop_utp/П.svg') center center/285px 252px no-repeat,
            rgba(0, 0, 0, .5);
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
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    width: auto;
}
.who_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
}
.who_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 24px;
    width: 50%;
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
.photomain_div {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: none;
}
.photomain_div img {
    height: 500px;
    object-fit: contain;
    display: none;
}
.main_div {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    padding-bottom: 24px;
    box-sizing: border-box;
    background: url(@/assets/photos/girl_main.png) bottom center no-repeat,
                rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);;
}
.right_side_main {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.btn {
    z-index: 3;
    align-self: center;
}
.main_div h2 {
    margin-top: 40px;
    font-size: 36px;
    font-weight: 900;
    color: #FFCEC2;
    text-align: center;
}
.utp_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
}
.utp {
    width: auto;
    font-size: 12px;
}
.slogan {
    width: 90%;
    padding: 16px 32px;
    border-radius: 32px;
    background: rgb(0,0,0, 0.7);
    margin-top: 48px;
    margin-bottom: 24px;
    z-index: 3;
    align-self: center;
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
    border-radius: 32px;
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
    
}
.active {
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
    width: 100%;
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