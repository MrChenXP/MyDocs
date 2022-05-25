<template>
<div>
  <h2>x: {{x}}, y: {{y}}</h2>
</div>
</template>

<script>

import {  defineComponent} from "vue"
/* 
在组件中引入并使用自定义hook
自定义hook的作用类似于vue2中的mixin技术
自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
*/
import useMousePosition from './useMousePosition'

export default defineComponent({
  name: 'useMousePosition',
  setup() {

    const {x, y} = useMousePosition()

    return {
      x,
      y,
    }
  }
})
</script>