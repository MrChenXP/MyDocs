//index.js获取应用实例 每个页面，都需要在页面对应的js文件中调用Page方法注册页面示例，指定页面的初始数据、生命周期回调、事件处理函数等
const app = getApp()
// Page是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把data数据和index.wxml一起渲染出最终的结构
// 在渲染完界面之后，页面实例就会收到一个 onLoad 的回调，你可以在这个回调处理你的逻辑https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
Page({
  data:{
    array:[1,2,3]
  },
  // 点击事件
    // 类型	      触发条件	          最低版本 
    // touchstart	手指触摸动作开始
    // touchmove	手指触摸后移动
    // touchcancel	手指触摸动作被打断，如来电提醒，弹窗
    // touchend	手指触摸动作结束
    // tap	手指触摸后马上离开
    // longpress	手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发	1.5.0
    // longtap	手指触摸后，超过350ms再离开（推荐使用longpress事件代替）
    // transitionend	会在 WXSS transition 或 wx.createAnimation 动画结束后触发
    // animationstart	会在一个 WXSS animation 动画开始时触发
    // animationiteration	会在一个 WXSS animation 一次迭代结束时触发
    // animationend	会在一个 WXSS animation 动画完成时触发
    // touchforcechange	在支持 3D Touch 的 iPhone 设备，重按时会触发
    // 除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如<form/>的submit事件，<input/>的input事件，<scroll-view/>的scroll事件，(详见各个组件)
  tapClick(e) {
    // e携带组件额外信息
    // e.target.dataset 事件源组件上由data-开头的自定义属性组成的集合
    console.log(e.target.dataset)
  }
})
