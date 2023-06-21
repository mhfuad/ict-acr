<template>
  <b-row>
    <b-col cols lg="2" class="sidebar d-none d-lg-block">
      <sidebar />
    </b-col>
    <b-col cols lg="10">
      <b-row>
        <b-col cols="12">
          <navbar />
          <button
            @click="hideSidebar"
            class="mt-2 btn btn-sm d-block d-lg-none"
          >
            <img
              height="20"
              width="20"
              src="../../assets/images/sidebar-icon/menu.png"
              alt=""
            />
          </button>
        </b-col>
        <b-cols v-if="hide == true" cols="12">
          <sidebar />
        </b-cols>
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import navbar from "./layout-components/navbar.vue";
import sidebar from "./layout-components/sidebar.vue";

export default {
  data() {
    return {
      initial: "d-none",
      hide: false,
    };
  },
  components: {
    sidebar,
    navbar,
  },
  methods: {
    hideSidebar() {
      this.hide = !this.hide;
    },
  },
};
</script>
