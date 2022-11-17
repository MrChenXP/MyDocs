<template>
  <div>
    <h2>refsToRefs</h2>
    <h3>foo: {{ foo }}</h3>
    <h3>bar: {{ bar }}</h3>
    <h3>foo2: {{ foo2 }}</h3>
    <h3>bar2: {{ bar2 }}</h3>
    <h3>name: {{ name }}</h3>
    <h3>age: {{ age }}</h3>

    <input type="text" ref="inputRef">
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from "vue";
/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/
export default {
  name: "refs_toRefs",
  setup() {
  /***=== toRefs ===*/
    // user是响应式,但name、age不是响应式,定时器改变无效
    const user = reactive({
      name: '无敌',
      age: 18
    })
    setInterval(() => {
      user.name += "-";
      user.age += 1;
    }, 1000);

    // state是响应式,stateAsRefs里的属性也被包装为响应式,不会改变state
    const state = reactive({
      foo: "a",
      bar: "b",
    });
    const stateAsRefs = toRefs(state); // {foo:{...,value:'a'}}
    setInterval(() => {
      state.foo += "+"; // 浅拷贝 
      state.bar += "+";
    }, 1000);
    
    // 返回的state里的属性已经改为响应式了
    const { foo2, bar2 } = useReatureX();

  /**=== ref ===*/
    const inputRef = ref<HTMLElement|null>(null) // 默认一个空 setup中,模板还未生成
    // const inputRef = ref<Vue|null>(null) // 有时候不是dom是个vue对象
    onMounted(()=>{
      console.log(inputRef)
      inputRef.value && inputRef.value.focus() // 有这个元素且聚焦这个元素
    })

    return {
      ...user,
      ...stateAsRefs,
      foo2,
      bar2,
      inputRef
    };
  },
};

function useReatureX() {
  const state = reactive({
    foo2: "a",
    bar2: "b",
  });

  setInterval(() => {
    state.foo2 += "-";
    state.bar2 += "-";
  }, 1000);

  return toRefs(state);
}
</script>
