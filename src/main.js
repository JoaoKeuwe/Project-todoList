import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import store from './vuex/vuex'




createApp(App).use(router, store).mount('#app')

