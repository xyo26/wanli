<template>
  <div class="flex-container">
    <div>
      <img alt="web logo" src="../assets/yinzhang.jpg" width="60" height="60" />
    </div>
    <div v-for="tab in tabs" :key="tab.name">
      <router-link :to="tab.link" class="tab">
        <div>{{ tab.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  components: {},
  data() {
    return {
      tabs: [
        {
          name: "库存",
          link: "/stock",
        },
        {
          name: "进货",
          link: "/purchase",
        },
        {
          name: "印染",
          link: "/dye",
        },
        {
          name: "售货",
          link: "/sale",
        },
        {
          name: "管理",
          link: "/manage",
        },
      ],
    };
  },
};
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
.tab {
  text-decoration: none;
}
</style>
