//vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0  //存储的变量
  },
  mutations: {  //存储的方法
    jia (state) {
      state.count++
    },
    jian (state) {
      state.count--
    },

  }
});

export default store
