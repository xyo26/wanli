<template>
  <div>
    this is stock container
    <div>{{ fabric_stocks }}</div>
  </div>
</template>

<script>
import axios from 'axios';
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
      .then((response) => (this.fabric_stocks = response));
  },
};
</script>

<style scoped>
</style>
