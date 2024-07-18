<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-duplicate-attributes -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="vidget" :class="{activeses: isBookingShow}">
    <div class="relative_block">
        <p @click="toggleActive" :class="{pactive: isBookingShow}">online<br>запись</p>
        <iframe :class="{closeactive: isBookingShow == false}" src="https://lapozitiv.s20.online/common/1/online-schedule?branch=1&locale=ru&pc=59CD90&crm=https://lapozitiv.s20.online&token=562e8292d6e80f4ad73d4ba4e1a0b8cc&apiToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwiaWF0IjoxNzIwMjAwMjQ5LCJleHAiOjE3MjI3OTIyNDl9.lap1Vyme-eqYcbe4jVBEQgowV1faoWtWjEVHgGk4giw&appKey=4759b51764f7cfda18fd1903248fb86d&" style="width: 100%; height: 90svh; border: 0px; border-radius: 24px;"></iframe>
        <font-awesome-icon :icon="['fas', 'xmark']" style="color: #000; font-size: 32px; position: absolute; bottom: 24px; right: 24px; cursor: pointer;" @click="toggleNonActive" :class="{closeactive: isBookingShow == false}"/>
    </div>
    </div>
</template>
  
<script>
  
export default {
    // props: 'showBook',
    data() {
      return {
        isBookingShow: false
      };
    },
    methods: {
      toggleActive() {
          this.isBookingShow = true
      },
      // toggleAct() {
      //     this.isBookingShow = true
      // },
      toggleNonActive() {
        this.isBookingShow = false
      }
    }
  }
  </script>
  
  <style scoped>
  .vidget {
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: fixed;
    bottom: 48px;
    right: 48px;
    background: transparent;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1102;
    transition: all 500ms ease;
    animation: scales 2s infinite;
    cursor: pointer;
    background: rgb(45, 185, 189);
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, .7);
  }
  .vidget p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    display: flex;
    transition: all 500ms ease;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
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
  p.pactive {
    display: none;
  }
  .activeses {
    width: 100%;
    height: 100svh;
    border-radius: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    animation: none;
    border: none;
  }
  .closeactive {
    display: none;
  }
  .relative_block {
    width: 1200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  @media all and (max-width: 430px) {
    .vidget {
      width: 0px;
      height: 0px;
      border: none;
      z-index: 1102;
      box-shadow: none;
    }
    .activeses {
    width: 100%;
    height: 100svh;
    border-radius: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    animation: none;
    border: none;
  }
  }
  </style>
  