<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <div>
      <a href="javascript:void(0)" @click="openWidget">Записаться на уроки</a>
      <div
        id="alfacrm-wizard-entry-point"
        data-locale="ru"
        data-branch="1"
        data-id="562e8292d6e80f4ad73d4ba4e1a0b8cc"
        :data-pc="widgetData.pc"
        :data-status="widgetData.status"
        :data-crm="widgetData.crm"
        :data-source="widgetData.source"
        :data-apiToken="widgetData.apiToken"
      ></div>
    </div> -->
    <!-- <script type="text/javascript" charset="UTF-8"></script> -->
  </template>
  
  <script>
  
  export default {
    name: 'BookingWidget',
    data() {
      return {

      };
    },
     async mounted() {
       await this.loadScript('https://w1174915.yclients.com/widgetJS')
        .then(() => {
          console.log('Script loaded successfully.');
        })
        .catch((error) => {
          console.error('Failed to load the script.', error);
        });
    },
    methods: {
        loadScript(src) {
         return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load script ${src}`));
          document.body.appendChild(script);
        });
      },
    },
    beforeUnmount() {
      const scripts = document.querySelectorAll('script[src="https://w1174915.yclients.com/widgetJS"]');
      scripts.forEach(script => {
        document.body.removeChild(script);
      });
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили здесь */
  </style>
  