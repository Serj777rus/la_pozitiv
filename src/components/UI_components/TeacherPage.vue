<template>
    <div>
        <HeadMenu></HeadMenu>
        <div class="teacher_modal" v-for="card in teachcard" :key="card.id">
            <div class="teacher_modal_div" v-if="card.id == teachId">
                <div class="card_left_side">
                    <div class="teacher_card_big">
                        <div class="back_grad_big">
                            <img :src="card.attributes.image.data.attributes.url">
                        </div>
                        <p>{{ card.attributes.article }}</p>
                        <div class="about_teacher_big">
                            <p>Имя: <span>{{ card.attributes.name }} {{ card.attributes.lastname }}</span></p>
                            <p>Возраст: <span>{{ card.attributes.age }}</span></p>
                            <p>Специализация: <span>{{ card.attributes.study }}</span></p>
                        </div>
                        <div class="socials">
                                <a :href="card.attributes.inst" target="_blank"><img src="@/assets/photos/teachers/instagram.svg"></a>
                                <a :href="card.attributes.vk" target="_blank"><img src="@/assets/photos/teachers/vk.svg"></a>
                        </div>
                    </div>
                </div>
                <div class="card_right_side">
                    <div class="right_up">
                        <h4>Обо мне:</h4>
                        <p>{{ card.attributes.bio }}</p>
                    </div>
                    <div class="right_down">
                        <div class="right_down_left">
                            <div class="skills">
                                <p>Достижения</p>
                                <ul>
                                    <li v-for="skill in card.attributes.skills" :key="skill">{{ skill.skill }}</li>
                                </ul>
                            </div>
                            <div class="skillses">
                                <p>Skills</p>
                                <ul>
                                    <li v-for="dost in card.attributes.dost" :key="dost">{{ dost.dostigenia }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="right_down_right">
                            <p>Видеовизитка</p>
                            <video :src="card.attributes.video.data.attributes.url || card.attributes.video.data" controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p @click="exit">Назад</p>
        <Footer></Footer>
    </div>
</template>

<script>
    import HeadMenu from './HeadMenu.vue'
    import Footer from './Footer.vue'
    import axios from 'axios';
    axios
    export default {
        components: {
            HeadMenu,
            Footer
        },
        data() {
            return {
                teachcard: [],
                teachId: ''
            }
        },
        beforeMount() {
            this.getTeachersData();
            this.teachId = this.$route.params.id;
            console.log(this.teachId)
            // this.teachId = '';
            // const storedTeacher = localStorage.getItem('teacher');
            // if (storedTeacher) {
            // this.teachcard = JSON.parse(storedTeacher);
            // this.teachId = this.$route.params.id
            // console.log(this.teachcard);
            // console.log(this.teachId);
            // localStorage.removeItem('teacher');
            // }
            // console.log(this.teachcard); // Проверяем данные в консоли
        },
        methods: {
           getTeachersData() {
            try {
                // const response = await axios.get(`${this.url}/getteachers`);
                const response = axios.get('https://supportive-heart-1886e94650.strapiapp.com/api/teachers?populate=*');
                if (response.status == 200) {
                this.teachcard = response.data.data;
                console.log(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
            },
            // deleteDataStorage() {
            //     localStorage.clear();
            // },
            exit() {
                // localStorage.clear();
                this.$router.push({name: 'teachers'})
            }
        },
        // beforeUnmount() {
        //     this.deleteDataStorage();
        // }  
    }
</script>

<style scoped>

</style>