<template>
  <div class="manage-flex-container">
    <div style="flex: 1">
      <div class="navigation" v-for="nav in navigations" v-bind:key="nav.name">
        <router-link :to="nav.link" class="my-link">
          <div>{{ nav.name }}</div>
        </router-link>
      </div>
    </div>
    <div style="flex: 8">
      <manage-canavs />
    </div>
  </div>
</template>

<script>
import ManageCanavs from './ManageCanvas.vue';
export default {
  name: "ManageContainer",
  components: {
    ManageCanavs
  },
  data() {
    return {
      navigations: [
        { name: "供货商", link: "/manage/suppliers" },
        { name: "印染厂", link: "/manage/dye-factories" },
        { name: "客户", link: "/manage/customers" },
      ],
    };
  }
};
</script>

<style scoped>
.manage-flex-container {
  display: flex;
  justify-content: space-around;
  background-color: #dedede;
}
.manage-flex-container > div {
  border-radius: 10px;
  margin: 0px 20px;
  background-color: white;
}
/* avoid underline introduced by router link */
.my-link {
  text-decoration: none;
}
.navigation {
  padding: 12px 0px;
}
.navigation :hover {
  cursor: pointer;
  background-color: #d4d4d4;
  opacity: 0.7;
}
</style>
