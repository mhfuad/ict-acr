<template>
  <b-row>
    <b-cols>
      <full-list-table class="my-3" :tableData="items" :tableLabel="fields" />
    </b-cols>
  </b-row>
</template>
<script>
import fullListTable from "@/components/common-table/table.vue";

export default{
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
    fullListTable,
  },
};
</script>
