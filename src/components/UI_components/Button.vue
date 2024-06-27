<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    button {
        padding: 16px 48px;
        background: linear-gradient(45deg, #1a1a1a 0%, #374084 50%, #822872 100%);
        color: #fff;
        font-size: 16px;
        border-radius: 32px;
        border: 1px solid #565656;
        cursor: pointer;
    }
</style>