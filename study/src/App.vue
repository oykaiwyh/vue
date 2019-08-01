<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>113123</p>
    <p>113123</p>
    <p>113123</p>

    <p>113123</p>
    <p>113123</p>
    <p>113123</p>
    <p>113123</p>
    <p>113123</p>
    <div @scroll="scroll($event)">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {scroll} from './scroll'
import './components/test.js'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
