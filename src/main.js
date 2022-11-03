import { createApp } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";
import Vue from 'vue'

import store from "./store/index";



const app = new Vue({
    store,
    router,
    render: (createEelement) => createEelement(App)
})

app.$mount("#app")

  