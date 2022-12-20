<script lang="ts" setup>
// vue3语法糖  setup标签属性 里面的代码会被编译成组件 setup() 函数的内容。只能和vue在同一文件不能使用src引入方式
// 这意味着与普通的 <script> 只在组件被首次引入的时候执行一次不同，<script setup> 中的代码会在每次组件实例被创建的时候执行
// 更少的样板内容，更简洁的代码。
// 能够使用纯 TypeScript 声明 props 和自定义事件。
// 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
// 更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。
import refReactive from './refReactive.vue'; // 顶层的绑定(包括变量,函数声明,import)会被暴露给模板,直接使用
import useMousePosition from './hooks/useMousePosition'; // js和模板里也可以直接使用导入的函数
import { defineProps, defineEmits, ref, reactive, computed, watch } from 'vue'; // props emits 自动可用无需导入(estlint会报错,可能需要声明)

const props = defineProps({
    msg: String,
});

let value = ref('小明');
const count = reactive({
    data: 1,
});
const emit = defineEmits(['click']);
const sonClick = () => {
    emit('click');
};
// const props = defineProps<{ props emit ts声明方式 不能和js混用
//   foo: string
//   bar?: number
// }>()
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()
// 纯ts不能设置默认值 可以使用withDefaults编译器宏
// interface Props {
//   msg?: string
//   labels?: string[]
// }
// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })
//计算属性
const change = computed(() => {
    return count.data * 2;
});
//监听属性
watch(
    change,
    (newVal, oldVal) => {
        console.log(`变化前：${oldVal}`);
        console.log(`变化后：${newVal}`);
    },
    {
        immediate: true, // 立即执行
        deep: true, // 深度监听
    },
);

// defineExpose({value,count}) // 父组件获取到组件的公开实例,不会拿到script setup 中的绑定,需要此函数暴露出去

// import { useSlots, useAttrs } from 'vue' 使用setupContext.slots setupContext.attrs
// const slots = useSlots()
// const attrs = useAttrs()

// const post = await fetch(`products.json`).then((r) => r.json()) 顶层await会被编译成 async setup()

</script>

<template>
    <div>
        {{ msg }}{{ value }}
        <button @click="sonClick">按钮</button>
        <!-- <refReactive /> -->
    </div>
</template>
