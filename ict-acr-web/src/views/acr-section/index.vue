<template>
  <b-row>
    <b-col cols="12" class="mt-4">
      <listTable class="my-3" :tableData="items" :tableLabel="fields" />
      <div class="d-block text-center">
        <b-link class="link" to="/acr/view-more">আরো দেখুন</b-link>
      </div>
      <listTable class="my-3" :tableData="items" :tableLabel="fields" />
      <listTable class="my-3" :tableData="items" :tableLabel="fields" />
      <listTable class="my-3" :tableData="items" :tableLabel="fields" />
    </b-col>
  </b-row>
</template>
<script>
import listTable from "../../components/common-table/table.vue";
export default {
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
  components: {
    listTable,
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333339;
}
</style>
