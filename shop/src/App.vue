<template>
  <div id="app">
    <van-nav-bar :title="titles[active].title" >
      <van-icon name="shopping-cart-o" slot="left" />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <div id="nav">
      
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to="/category">
        分类
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">
        我的
      </van-tabbar-item>
    </van-tabbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      active: 0,
      titles: [
        {name:'home',title: '商城',path: '/'},
        {name:'category',title: '分类',path: '/category'},
        {name:'cart',title: '购物车',path: '/cart'},
        {name:'user',title: '我的',path: '/user'}
      ]
    }
  },
  
}
</script>

<style lang="scss">
#app {
  
}
#nav {
  
  
}
</style>
