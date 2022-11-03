import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks-list/tasks'

// Create a new store instance.
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    tasks
  },
  
  state () {
    return {
      count: 10
    }
  },
  
  mutations: {
    increment (state) {
      state.count++
    }
  }

})

// Install the store instance as a plugin
