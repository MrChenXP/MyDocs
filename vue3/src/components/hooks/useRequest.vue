<template>
<div class="about">
  <h2 v-if="loading">LOADING...</h2>
  <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
  <!-- <ul v-else>
    <li>id: {{result.id}}</li>
    <li>name: {{result.name}}</li>
    <li>distance: {{result.distance}}</li>
  </ul> -->

  <ul v-for="p in result" :key="p.id">
    <li>id: {{p.id}}</li>
    <li>title: {{p.title}}</li>
    <li>price: {{p.price}}</li>
  </ul>
  <!-- <img v-if="result" :src="result[0].url" alt=""> -->
</div>
</template>

<script lang="ts">
import {
  watch
} from "vue"
import useRequest from './useRequest' 

// 地址数据接口
// interface AddressResult {
//   id: number;
//   name: string;
//   distance: string;
// }

// 产品数据接口
interface ProductResult {
  id: string;
  title: string;
  price: number;
}

export default {
  setup() {

    // const {loading, result, errorMsg} = useRequest<AddressResult>('/address.json')
    const {loading, result, errorMsg} = useRequest<ProductResult[]>('/products.json')

    watch(result, () => {
      if (result.value) {
        // console.log(result.value) // 有提示
        console.log(result.value.length) // 有提示
      }
    })

    return {
      loading,
      result, 
      errorMsg
    }
  }
}
</script>
