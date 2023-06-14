<template>
  <b-row class="bg-sidebar d-block ">
    <b-col cols="12" class="py-3 mx-1 text-center">
      <img
        src="../../../assets/images/dashboard/logo.png"
        alt="logo"
        class="img-fluid mt-4"
      />
    </b-col>
    <b-col cols="12" class="m-0 p-0">
      <ul class="m-0 p-0">
        <li
          class="bg-li text-center"
          :class="{ selected: item.show == true }"
          v-for="(item, index) in items"
          :key="index"
          @click.prevent="action(item.id)"
        >
          <p class="p-3">{{ item.name }}</p>
          <ul class="sub-li m-0 p-0" v-if="item.show == true">
            <li v-for="sub in item.subList" class="m-0 p-0">
              <p class="p-3">{{ sub.name }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "ড্যাশবোর্ড",
          show: false,
          subList: [
            { id: 1, name: "এ সি আর" },
            { id: 1, name: "গেজেটেড অফিসার্স" },
            { id: 1, name: "নন-গেজেটেড অফিসার্স" },
            { id: 1, name: "গেজেটেড ক্যাডার অফিসার্স" },
          ],
        },
        {
          id: 2,
          name: "অনুমোদিত তালিকা",
          show: false,
          subList: [
            { id: 1, name: "গেজেটেড অফিসার্স" },
            { id: 1, name: "নন-গেজেটেড অফিসার্স" },
            { id: 1, name: "গেজেটেড ক্যাডার অফিসার্স" },
          ],
        },
        {
          id: 3,
          name: "অনুমোদিত তালিকা",
          show: false,
          subList: [
            { id: 1, name: "গেজেটেড অফিসার্স" },
            { id: 1, name: "নন-গেজেটেড অফিসার্স" },
            { id: 1, name: "গেজেটেড ক্যাডার অফিসার্স" },
          ],
        },
      ],
    };
  },
  methods: {
    action(index) {
      console.log(index);
      let info = this.items.find((e) => e.id == index);

      info.show = !info.show;

      let previousInfo = this.items.find((e) => e.id == index - 1);
      if (previousInfo.id == 0) {
        previousInfo == 1;
      }
      previousInfo.show = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li p:hover {
  background: #858588;
  color: white;
}
.bg-sidebar {
  height: 100% !important;
  background: #2f3349;
}
.bg-li {
  background: rgba(255, 255, 255, 0.02);
  color: #a8adaf;
}
.selected {
  background: #222224;
  color: white;
}
.sub-li {
  background: #858588;
  color: white;
}
</style>
