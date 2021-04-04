<template>
  <div class="my-header">
    <div class="flex-container">
      <div>
        <img
          alt="web logo"
          src="../assets/yinzhang.jpg"
          width="32px"
          height="32px"
          style="margin: 0px 40px 0px 0px"
        />
      </div>
      <div v-for="tab in tabs" :key="tab.name">
        <router-link :to="tab.link" class="my-link">
          <div>{{ tab.name }}</div>
        </router-link>
      </div>
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
          link: "/order",
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
          link: "/manage/suppliers",
        },
      ],
    };
  },
};
</script>

<style>
.my-header {
  height: 56px;
  padding: 4px 16px;
  background-color: white;
}
.flex-container {
  height: 56px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 58px;
  padding: 0px 12px;
}
.flex-container > div {
  padding: 0px 16px;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.flex-container > div :hover {
  cursor: pointer;
  background-color: #d4d4d4;
  opacity: 0.7;
}
/* avoid underline introduced by router link */
.my-link {
  text-decoration: none;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  background-color: indianred;
  cursor: pointer;
}
</style>
