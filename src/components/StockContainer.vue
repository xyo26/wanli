<template>
  <div style="border-radius: 10px; margin: 10px 30px">
    <table style="width: 100%">
      <tr>
        <th>编号</th>
        <th>品名</th>
        <th>规格</th>
        <th>色布</th>
        <th>色号</th>
        <th>库存</th>
      </tr>
      <tr
        class="fabric-row"
        v-for="fabric in fabric_stocks"
        v-bind:key="fabric.fabric_id"
      >
        <td>{{ fabric.fabric_id }}</td>
        <td>{{ fabric.fabric_type }}</td>
        <td>{{ fabric.fabric_spec }}</td>
        <td>
          <img v-if="fabric.dye_indicator" src="../assets/done-24px.svg" />
          <img v-if="!fabric.dye_indicator" src="../assets/clear-24px.svg" />
        </td>
        <td>{{ fabric.color }}</td>
        <td>{{ fabric.amount }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StockContainer",
  components: {},
  data() {
    return {
      fabric_stocks: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5000/fabrics")
      .then((response) => (this.fabric_stocks = response.data));
  },
};
</script>

<style scoped>
.fabric-row:hover {
  cursor: pointer;
  background-color: #d4d4d4;
  opacity: 0.7;
}
</style>
