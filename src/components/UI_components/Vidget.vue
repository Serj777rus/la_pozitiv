<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
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
    </div>
  </template>
  
  <script>
  // eslint-disable-next-line no-undef
  /* global AlfaCRM */
  
  export default {
    name: 'BookingWidget',
    data() {
      return {
        widgetData: {
          pc: '#59CD90',
          status: 0,
          crm: 'https://lapozitiv.s20.online',
          source: 0,
          apiToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwiaWF0IjoxNzIwMjAwMjQ5LCJleHAiOjE3MjI3OTIyNDl9.lap1Vyme-eqYcbe4jVBEQgowV1faoWtWjEVHgGk4giw'
        }
      };
    },
    mounted() {
      this.loadScript('//cdn.alfacrm.pro/enroll-widget/v2.0.0/widget-wizard-starter-v2.0.0.js')
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
          document.head.appendChild(script);
        });
      },
      openWidget() {
        if (typeof AlfaCRM !== 'undefined') {
          AlfaCRM.OpenWizardWidget();
        } else {
          console.error('AlfaCRM is not defined');
        }
      }
    },
    beforeUnmount() {
      const scripts = document.querySelectorAll('script[src="//cdn.alfacrm.pro/enroll-widget/v2.0.0/widget-wizard-starter-v2.0.0.js"]');
      scripts.forEach(script => {
        document.head.removeChild(script);
      });
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили здесь */
  </style>
  