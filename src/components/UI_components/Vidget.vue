<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <div class="vidget">
        <iframe src="https://lapozitiv.s20.online/common/1/online-schedule?branch=1&locale=ru&pc=59CD90&crm=https://lapozitiv.s20.online&token=562e8292d6e80f4ad73d4ba4e1a0b8cc&apiToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwiaWF0IjoxNzIwMjAwMjQ5LCJleHAiOjE3MjI3OTIyNDl9.lap1Vyme-eqYcbe4jVBEQgowV1faoWtWjEVHgGk4giw&appKey=4759b51764f7cfda18fd1903248fb86d&" style="width: 1200px; height: 80svh; border: 0px; border-radius: 24px;"></iframe>
        <font-awesome-icon :icon="['fas', 'xmark']" style="color: #fff; font-size: 32px; position: absolute; top: 24px; right: 24px; cursor: pointer;" />
    </div>
</template>
  
<script>
  
export default {
    data() {
      return {

      };
    }
  }
  </script>
  
  <style scoped>
  .vidget {
    display: none;
    width: 100%;
    height: 100svh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .7);
    justify-content: center;
    align-items: center;
  }
  </style>
  