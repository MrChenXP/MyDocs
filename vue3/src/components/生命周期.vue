<template>
  <div>
    <h1>生命周期</h1>
    <button @click="addToCart">add on cart</button>
    <p>cart {{cart}}</p>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  defineComponent,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  ref,
} from "vue";


export default defineComponent({
  name: "lifeCycle",
  props: {},
  // vue3支持vue2的声明周期,但vue3的组合式api比vue2运行的更块更早
  beforeCreate() {}, // Vue实例创建前
  created() {}, // 实例创建后
  beforeMount() {}, // 组件挂载前
  mounted() {}, // 挂载完成
  beforeUpdate() {}, // 组件更新前
  updated() {}, // 组件更新后
  beforeUnmount() {}, // 销毁之前
  unmounted() {}, // 销毁之后
  setup() {
    const cart = ref(0)
    // 与 2.x 版本生命周期相对应的组合式 API
    // beforeCreate -> 使用 setup() 比beforeCreate还早
    // created -> 使用 setup()
    // beforeMount -> onBeforeMount
    // mounted -> onMounted
    // beforeUpdate -> onBeforeUpdate
    // updated -> onUpdated
    // beforeDestroy -> onBeforeUnmount
    // destroyed -> onUnmounted
    // errorCaptured -> onErrorCaptured
    // activated -> onActivated
    // deactivated -> onDeactivated
    onMounted(() => {
      console.log(this); // undefined vue还没渲染呢
      console.log(cart.value); // 0
    });
    // 调试钩子
    // onRenderTracked
    //  跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。
    //  此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键
    onRenderTracked(({key,target,type}) => {
      console.log(key,target,type) // value RefImpl get
    });
    // onRenderTriggered
    //  当虚拟 DOM 重新渲染为 triggered.Similarly 为renderTracked，接收 debugger event 作为参数
    //  此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。
    onRenderTriggered(({key,target,type}) => {
      console.log(key,target,type) // value RefImpl set

    });
    return {
      cart
    }
  },
  // renderTracked(()=>{}) 跟上面的onRenderTracked一样
  // renderTriggered(()=>{})
  methods:{
    addToCart(){
      this.cart +=1;//触发onRenderTriggered
    }
  }
});
</script>

<style scoped></style>
