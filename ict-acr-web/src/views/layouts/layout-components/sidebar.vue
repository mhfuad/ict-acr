<template>
  <b-row class="bg-sidebar d-block">
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
          <b-link class="link" :to="item.link">
            <b-row class="main-bar py-3">
              <b-col cols="2">
                <img :src="getImage(item.icon)" alt="icon" />
              </b-col>
              <b-col cols="10" class="text-start">
                <p class="m-0 p-0 link">{{ item.name }}</p>
              </b-col>
            </b-row>
          </b-link>
          <ul class="sub-li m-0 p-0" v-if="item.show == true">
            <li v-for="sub in item.subList" class="ms-3 p-2 text-start">
              <b-link class="link" :to="sub.link">
              <p class="p-3">{{ sub.name }}</p>
            </b-link>
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
          icon: "dashboard.png",
          link:'/',
          subList: [
            
          ],
        },
        {
          id: 2,
          name: "এ সি আর",
          show: false,
          icon: "acr.png",
          link:'/acr',
          subList: [
            { id: 1, name: "গেজেটেড অফিসার্স",link:"/" },
            { id: 1, name: "নন-গেজেটেড অফিসার্স",link:"/" },
            { id: 1, name: "গেজেটেড ক্যাডার অফিসার্স",link:"/" },
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
    getImage(image) {
      return new URL(
        `../../../assets/images/sidebar-icon/${image}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li:hover {
  background: #858588;
  color: white;
}
.bg-sidebar {
  min-height: 975px !important;
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
.main-bar {
  margin-left: 15px;
}
@media only screen and (max-width: 1450px) {
  .main-bar {
    margin-left: 30px;
  }
  .bg-sidebar {
    min-height: 636px !important;
    height: 100% !important;
    background: #2f3349;
  }
}
/* .link {
  text-decoration: none !important;
} */
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
</style>
