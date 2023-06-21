<template>
  <b-row class="mt-4">
    <b-col cols="12" md="8"
      ><p class="m-0 p-0 filter-title">
        অনুরোধ তালিকা (মূল্যায়ন বাকি || গেজেটেড অফিসার)
      </p></b-col
    >
    <b-col cols="12" md="4">
      <b-row>
        <b-col cols="12" md="6" class="d-flex align-items-center">
          <label for="" class="me-1">রেকর্ড</label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col cols="12" md="6" class="mt-2 mt-lg-0">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
  <div class="mt-3">
    Selected: <strong>{{ selected }}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "প্রতিস্বাক্ষরকারী" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
<style scoped>
.filter-title {
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
}
</style>
