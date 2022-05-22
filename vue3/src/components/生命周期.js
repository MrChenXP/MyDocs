// 与 2.x 版本生命周期相对应的组合式 API

// beforeCreate -> 使用 setup()
// created -> 使用 setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed -> onUnmounted
// errorCaptured -> onErrorCaptured
// 新增的钩子函数

// 组合式 API 还提供了以下调试钩子函数：

// onRenderTracked
// onRenderTriggered
// vue3支持vue2的声明周期,但vue3的组合式api比vue2运行的更块更早