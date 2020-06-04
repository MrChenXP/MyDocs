//vuex 一个组件改变了这里的值,其他组件也会跟着改变,有点全局变量的意思
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: true // 严格模式
  state: { // 存储的变量
    count: 0
  },
  getters:{ // 可以认为是state的计算属性 一般用来获取vuex数据
    countGetters: state =>{
      return state.count+1
    }
  },
  mutations: {  // 存储的方法 一般用来改变vuex数据
    jia (state) {
      state.count++
      // state.commit('jia') // 严格模式下,不能直接使用mutations,要先注册
    },
    jian (state) {
      state.count--
    },
  },
  actions:{ // 提交的是mutations,而不是直接变更状态,可以包含任意异步操作
    jiaActions(context){ // context包含store相同属性和方法
      // context.state.xx context.getters.xx 获取store里的key
      setTimeout(() => {
        context.commit('jia') // 提交一个mutations
      }, 1000)
    }
  }
});

export default store
