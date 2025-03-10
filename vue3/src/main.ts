import { createPinia } from 'pinia'
// 引入createApp函数,创建对应的应用,产生应用的实例对象
import { createApp } from 'vue'
// 引入App组件(所有组件的父级组件)
import App from './App.vue'

// 创建App应用返回对应的实例对象,调用mount方法进行挂载 挂载到index.html中的#app元素中
createApp(App).use(createPinia()).mount('#app')
