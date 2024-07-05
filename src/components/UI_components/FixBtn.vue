<template>
    <div class="online_btn_main" @click="shows">
        <font-awesome-icon :icon="['faL', 'address-card']" style="color: #ffffff;" />
        <p>Online запись</p>
    </div>
</template>

<script>
    export default {
        methods: {
            shows() {
                // Используем this.$el, чтобы работать с элементом компонента
                document.querySelector('.line').classList.toggle('acti');
            }
        }
    }
</script>

<style scoped>
.online_btn_main {
    padding: 12px 12px;
    border-radius: 50px;
    background: transparent;
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
    gap: 8px;
    animation: scales 1000ms infinite;
    cursor: pointer;
    transition: all 1000ms ease;
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
