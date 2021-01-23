<template>
  <div id="app">
    <my-header />
    <my-canvas />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyCanvas from './components/MyCanvas.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyCanvas
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
  background-color: #d4d4d4
;}
</style>
