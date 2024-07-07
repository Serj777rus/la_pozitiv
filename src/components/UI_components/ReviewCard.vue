<template>
    <div class="reviews">
        <div class="reviews_div">
            <h2>Отзывы наших учеников</h2>
            <div class="all_cards">
                <div class="review_card" v-for="card in reviews" :key="card.id">
                <div class="photo_name">
                    <img :src="card.image">
                    <div class="name_clas">
                        <p>{{ card.name }}</p>
                        <span>{{ card.clas }}</span>
                    </div>
                </div>
                <div class="review">
                    <p>{{ card.review }}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reviews: [{
                    id: 1,
                    name: 'Раян Гослинг',
                    clas: 'Ученик класса “Вокал”',
                    image: require('@/assets/photos/reviews/gosling.png'),
                    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
                },
                {
                    id: 2,
                    name: 'Брэд Питт',
                    clas: 'Ученик класса “Вокал”',
                    image: require('@/assets/photos/reviews/pitt.png'),
                    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
                },
                {
                    id: 3,
                    name: 'Бьенсе',
                    clas: 'Ученик класса “Вокал”',
                    image: require('@/assets/photos/reviews/beunce.png'),
                    review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
                }]
            }
        }
        
    }
</script>

<style scoped>
    .reviews {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
    }
    .reviews_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .reviews_div h2 {
        font-size: 48px;
        font-weight: 900;
    }
    .all_cards {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
        overflow: auto;
        padding: 16px 0px;
        overflow-y: hidden;
    }
    .review_card {
        min-width: 500px;
        height: 300px;
        border-radius: 32px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(10px);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, .7);
    box-sizing: border-box;
        box-sizing: border-box;
    }
    .photo_name {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
    .photo_name img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #fff;
        box-sizing: border-box;
    }
    .photo_name p {
        font-size: 24px;
        font-weight: 500;
    }
    .photo_name span {
        font-size: 16px;
        font-weight: 200;
    }
    .name_clas {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .review {
        font-size: 16px;
        font-weight: 200;
    }
    @media all and (max-width: 440px) {
        .reviews {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 140px;
        padding: 0px 10px;
    }
    .reviews_div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
    .reviews_div h2 {
        font-size: 32px;
        font-weight: 900;
    }
    .all_cards {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        gap: 24px;
        overflow: auto;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }
    .review_card {
        min-width: 80%;
        height: auto;
        border-radius: 32px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        box-sizing: border-box;
        scroll-snap-align: start;
    }
    .photo_name {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 12px;
    }
    .photo_name img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #fff;
        box-sizing: border-box;
    }
    .photo_name p {
        font-size: 24px;
        font-weight: 500;
    }
    .photo_name span {
        font-size: 16px;
        font-weight: 200;
    }
    .name_clas {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .review {
        font-size: 16px;
        font-weight: 200;
    }
    }
</style>