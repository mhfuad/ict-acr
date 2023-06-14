<template>
  <b-row class="border rounded mx-1">
    <b-col cols="12">
        
        <filter-section/>
    </b-col>
    <b-col>
      <b-table striped hover :items="tableData" :fields="tableLabel">
        <template #cell(action)="">
          <button class="btn btn-light shadow-lg border-light">মূল্যায়ন</button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import filterSection from '../common-filter/filter.vue';
export default {
  props: {
    tableLabel: {
      type: Object,
      default: () => ({}),
    },
    tableData: {
      type: Object,
      default: () => ({}),
    },
  },
  components:{
    filterSection
  }
};
</script>
