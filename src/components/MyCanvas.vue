<template>
  <div class="canvas">
      this is canvans
      <router-view class='container'/>
  </div>
</template>

<script>

export default {
  name: 'MyCanvas',
  components: {
  }
}
</script>

<style scoped>
.canvas {
    height: 200px;
}
.container {
    background: white;
    margin: 10px 10px;
    height: 100px;
}
</style>
