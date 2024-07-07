<template>
  <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
  </router-view>
</template>

<script>

export default {

  }
</script>

<style>
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Black.ttf');
  font-weight: Bolder;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Medium.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Light.ttf');
  font-weight: 200;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Regular.ttf');
  font-weight: 500;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Semibold.ttf');
  font-weight: 700;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Heavy.ttf');
  font-weight: 900;
}
@font-face {
  font-family: 'Gilroy';
  src: url('~@/assets/Gilroy/Gilroy-Thin.ttf');
  font-weight: 100;
}

#app {
  font-family: 'Gilroy', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  margin-top: 20px;
}
html,
body {
  /* background: #252525; */
  background: -webkit-linear-gradient(90deg, #9f6cd3,#5ca1cb,#2bc7c4);background: linear-gradient(90deg, #9f6cd3,#5ca1cb,#2bc7c4);
}
</style>
