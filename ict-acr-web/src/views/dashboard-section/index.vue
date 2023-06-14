<template>
  <b-row>
    <b-col cols="12">
      <b-row>
        <b-col cols="12">
          <nav-bar />
        </b-col>
        <b-col cols="12">
          <hero />
        </b-col>
        <b-col cols="12" md="6">
          <chart />
        </b-col>
        <b-col cols="12" md="6">
          <parcentage-report />
        </b-col>
        <b-col cols="12" class="mt-4">
          <listTable :tableData="items" :tableLabel="fields" />
        </b-col>
        <b-col cols="12" class="mt-4">
          <listTable :tableData="itemsTwo" :tableLabel="fields" />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import sideBar from "./dashboard-components/sidebar.vue";
import navBar from "./dashboard-components/navbar.vue";
import hero from "./dashboard-components/hero.vue";
import chart from "./dashboard-components/hero-components/chart.vue";
import parcentageReport from "./dashboard-components/hero-components/parcentageReport.vue";
import listTable from "../../components/common-table/table.vue";
export default {
  components: {
    sideBar,
    navBar,
    hero,
    chart,
    parcentageReport,
    listTable,
  },
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table

      items: [
        {
          name: "Habib Khan",
          id: "NT001",
          designation: "Joint Secretary",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
        },
      ],
      itemsTwo: [
        {
          name: "Habib Khan",
          id: "NT001",
          designation: "Joint Secretary",
          deadline: "05 Jan 2018 - 31 Dec 2018",
          date: "05 Jan 2022",
        },
      ],
      fields: [
        {
          key: "name",
          label: "আবেদনকারী",
          sortable: true,
        },
        {
          key: "id",
          label: "আইডি",
          sortable: true,
        },
        {
          key: "designation",
          label: "পদবী",
        },
        {
          key: "deadline",
          label: "প্রতিবেদনের তারিখসীমা",
        },
        {
          key: "date",
          label: "তারিখ",
        },
        {
          key: "action",
          label: "একশন",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
