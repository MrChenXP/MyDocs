//vuex 一个组件改变了这里的值,其他组件也会跟着改变,有点全局变量的意思
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: { // 存储的变量
    count: 0  
  },
  getters:{ // 可以认为是state的计算属性
    countGetters: state =>{
      return state.count+1
    }
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
