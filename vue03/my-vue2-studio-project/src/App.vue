<template>
  <div id="app">
<!--    alt="Vue logo"当图片无法显示或者对于图像描述不清时，替代文本会显示在图片位置-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="欢迎来到新世界" zsj="赵水江"/>-->
<!--    <TestWindow/>-->
<!--    <router-link to="/">Home</router-link>-->
<!--    <router-link to="/test">About</router-link>-->
<!--    <router-view></router-view>-->
    <div>
      <router-link to="#/find" class="active">发现音乐</router-link>
      <router-link to="#/my">我的音乐</router-link>
      <router-link to="#/friend">朋友的音乐</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import TestWindow from './components/TestWindow'
//加入的vue组件都得放入components中
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TestWindow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
