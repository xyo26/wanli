<template>
  <div
    style="
      border-radius: 25px;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <h2 style="margin: 10px 0px 0px 0px; padding: 16px">进 货 单</h2>
    <table width="100%">
      <tr>
        <td class="form-item">供应商</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">进货时间</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">品名</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">规格</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">单价</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">数量</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">实际金额</td>
        <td><input /></td>
      </tr>
      <tr>
        <td class="form-item">已付款？</td>
        <td><input type="checkbox" /></td>
      </tr>
    </table>
    <div style="padding: 16px"><button>提交</button><button>清除</button></div>
  </div>
</template>

<script>
export default {
  name: "OrderContainer",
  components: {},
};
</script>

<style scoped>
td {
  padding: 8px;
}
button {
  padding: 0px 32px;
  margin: 0px 32px;
  font-size: 16px;
}
.form-item {
  width: 30%;
}
</style>
