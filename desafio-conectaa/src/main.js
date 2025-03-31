import { createApp } from 'vue'
import {createI18n} from 'vue-i18n'
import App from './App.vue'

import { en } from './locales/en.js'
import { pt_BR } from './locales/pt_BR.js'
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap';  

const languages = {en, pt_BR}

const i18n = createI18n({
    locale: 'pt_BR',
    fallbackLocale: 'pt_BR',
    messages: languages
});


createApp(App).use(i18n).mount('#app')
