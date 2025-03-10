<template>
  <!-- 显示用户名称 -->
  <div>
    <h1>Pinia</h1>
    <!-- 添加商品到购物车的表单 -->
    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <h3 for="item-name">商品名称</h3>
      <input type="text" v-model="itemName" />
      <button>添加</button>
    </form>

    <!-- 购物车商品列表和操作 -->
    <form @submit.prevent="buy">
      <h3>购物车列表</h3>
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button @click="cart.removeItem(item.name)" type="button">X</button>
        </li>
      </ul>

      <!-- 购物车结算按钮， -->
      <button >结算</button>
      <!-- 清空购物车按钮，根据购物车商品数量来启用或禁用 -->
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >清空购物车</button>
    </form>
  </div>
</template>

<script type="text/javascript">
import { defineComponent, ref } from 'vue'
import { useCartStore } from '../stores/cart'

export default defineComponent({
  name: 'PiniaDoc',
  setup() {
    // 使用 Pinia 状态管理库来获取用户和购物车的 store
    const cart = useCartStore()

    // 创建一个响应式的输入框变量
    const itemName = ref('')

    /**
     * 将商品添加到购物车
     * 当输入框为空时不执行任何操作
     * @returns {void}
     */
    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

    /**
     * 清空购物车
     * 在用户确认后，将购物车的商品列表置为空数组
     * @returns {void}
     */
    function clearCart() {
      if (window.confirm('你确定要清空购物车吗?')) {
        cart.rawItems = []
      }
    }

    /**
     * 结算购物车商品
     * 异步调用购物车的购买方法，并在控制台输出购买的商品数量
     * 购买后清空购物车
     * @returns {Promise<void>}
     */
    async function buy() {
      const n = await cart.purchaseItems()

      console.log(`购买了 ${n} 件商品`)

      cart.rawItems = []
    }

    // 将用户和购物车的状态暴露到全局，方便调试
    window.stores = {  cart }

    // 返回绑定到模板的变量和函数
    return {
      itemName,
      addItemToCart,
      cart,

      buy,
      clearCart,
    }
  },
})
</script>

<style>
</style>