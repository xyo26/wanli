<template>
  <div>
    <table style="width: 100%">
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>电话</th>
        <th>地址</th>
      </tr>
      <tr
        class="supplier-row"
        v-for="supplier in suppliers"
        v-bind:key="supplier.supplier_id"
      >
        <td>{{ supplier.supplier_id }}</td>
        <td>{{ supplier.name }}</td>
        <td>{{ supplier.phone_number }}</td>
        <td>{{ supplier.address }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Supplilers",
  components: {},
  data() {
    return {
      suppliers: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5000/suppliers")
      .then((response) => (this.suppliers = response.data));
  },
};
</script>

<style scoped>
.supplier-row:hover {
  cursor: pointer;
  background-color: #d4d4d4;
  opacity: 0.7;
}
</style>
