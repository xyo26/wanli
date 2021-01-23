<template>
  <div class="flex-container">
    <div>
        <img alt="web logo" src="../assets/yinzhang.jpg" width=60 height=60>
    </div>
    <div>库存</div>
    <div>进货</div>
    <div>投坯</div>
    <div>售货</div>
    <div>管理</div>
    <div/>
    <div/>
  </div>
</template>

<script>

export default {
  name: 'MyHeader',
  components: {
  }
}
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  background-color: white;
}
.flex-container > div {
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
