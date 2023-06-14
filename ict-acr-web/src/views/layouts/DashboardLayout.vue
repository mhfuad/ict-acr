<template>
  <div class="dashboard">
    <b-row>
      <b-col cols="12" md="2">
        <sidebar />
      </b-col>
      <b-col cols="12" md="10">
        <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import sidebar from "../dashboard-section/dashboard-components/sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>

<style scoped>
.dashboard {
  height: 100vh !important;
}
</style>
