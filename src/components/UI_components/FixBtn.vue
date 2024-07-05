<template>
    <div class="online_btn_main" @click="shows">
       <a href="https://lapozitiv.s20.online/common/1/wizard/embed?data_status=0&data_source=0&data_pc=%2359CD90&data_locale=ru"><font-awesome-icon :icon="['faL', 'address-card']" style="color: #ffffff;" /></a>
        <p>Online запись</p>
    </div>
</template>

<script>
    export default {
        methods: {
            shows() {
                // Используем this.$el, чтобы работать с элементом компонента
                document.querySelector('.online_btn_main').classList.toggle('acti');
            }
        }
    }
</script>

<style scoped>
.online_btn_main {
    border-radius: 50px;
    background: #252525;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    border: 2px solid #fff;
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    animation: scales 1000ms infinite;
    cursor: pointer;
    transition: all 1000ms ease;
    width: 180px;
    height: 40px;
}
@keyframes scales {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>
