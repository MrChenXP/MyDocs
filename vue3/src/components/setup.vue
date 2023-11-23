<template>
  <div>
    <h1>setup组件</h1>
    {{ count }}
    <h3>{{msg}}</h3>
    <button @click="emitP">分发事件</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { getCurrentInstance } from "vue"; // setup获取vue对象, getCurrentInstance().xxxx

export default defineComponent({
  name: "SetupTip",
  props: ['msg'],
  // props: {
  //     pageData: { type: Object },
  // },
  // emits: ['update:loadingShow', 'export'], // 规范 没有代码用处,给开发者查看返回事件
  // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  // setup是组合api的入口函数
  setup(props,context) {
    // setup执行的时机
    //   setup在beforeCreate之前执行(一次), 此时vue组件对象还没有创建
    //   setup中,this是undefined, 不能通过this来访问data/computed/methods/props
    //     其实所有的composition API相关回调函数中也都不可以使用
    // setup的返回值
    //   一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
    //   返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
    //   返回对象中的方法会与methods中的方法合并成功组件对象的方法
    //   如果有重名, setup优先
    //   注意:
    //     一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
    //     setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
    // setup的参数
    //   setup(props, context) / setup(props, {attrs, slots, emit})
    //     props: 包含props配置声明,且传入了的所有属性,的一个对象
    //     context:
    //        attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    //        slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    //        emit: 用来分发自定义事件的函数, 相当于 this.$emit
    // 变量
    let count = 0;
    // 方法
    function updateCount() {
      alert(count);
    }
    console.log(props.msg, context.attrs.msg2, context.slots, context.emit)
    // console.log(props.pageData) // 对象直接使用
    // 分发自定义事件
    function emitP() {
      context.emit('emitFun', '传给父级的值')
    }
    // 更新props的值
    // context.emit('update:pageData', )
    // let pageDataSync: any = computed({
    //   get() {
    //     return props.pageData;
    //   },
    //   set(value) {
    //     emit('update:pageData', value);
    //   },
    // }); 
     

    // 返回的是一个对象
    return {
      // 属性
      count,
      // 方法
      updateCount,
      emitP
    };
  },
  data () {
    return {
      // count: 2 被setup覆盖
    }
  },
  // 数据初始化的声明周期回调
  beforeCreate () {
    console.log('beforeCreate', this) // setup后执行
  },
  mounted() {
    console.log(this) // this是Proxy对象 promise
  },
  methods: {
    showMsg2(){
      // 与setup中的方法一起合并到vue对象
      console.log('showMsg2')
      console.log(this.count)
    }
  }

});
</script>

<style></style>
