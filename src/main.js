import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 
library.add(fas);
library.add(fab);

const router = createRouter({
    routes: [{
        path: '/',
        component: Home,
        name: 'home'
    }],
    history: createWebHistory()
})
const app = createApp(App);

// Регистрируем компонент fontawesome globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')