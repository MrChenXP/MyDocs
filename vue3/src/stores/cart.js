import { defineStore, acceptHMRUpdate } from 'pinia'

// 定义购物车存储
export const useCartStore = defineStore({
  id: 'cart',
  // 初始化购物车项为空数组
  state: () => ({
    rawItems: [],
  }),
  getters: {
    // 处理并返回购物车中的商品项
    items: (state) => 
      // 该 getter 将 rawItems 转换为一个对象数组，每个对象包含商品名称和数量
      state?.rawItems.reduce((items, item) => {
        const existingItem = items.find((it) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        return items
      }, []),
  },
  actions: {
    // 向购物车中添加商品
    addItem(name) {
      this.rawItems.push(name)
    },

    // 从购物车中移除商品
    removeItem(name) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) this.rawItems.splice(i, 1)
    },

    // 购买购物车中的所有商品
    async purchaseItems() {

      console.log('正在购买', this.items)
      const n = this.items.length
      this.rawItems = []

      return n
    },
  },
})

// 如果启用了模块热更新，则接受对 useCartStore 的更新
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}