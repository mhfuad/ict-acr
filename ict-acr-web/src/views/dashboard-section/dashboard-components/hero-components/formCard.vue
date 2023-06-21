<template>
  <div class="px-2">
    <b-row>
      <b-col
        v-for="(card, index) in formCards"
        :key="index"
        class="py-1 py-lg-0"
      >
        <b-link class="link">
          <b-card class="text-center" :class="card.cardClass">
            <b-card-text>
              <div
                class="d-flex flex-row justify-content-center align-items-center"
              >
                <div class="me-2">
                  <img src="@/assets/images/dashboard/formIconOne.png" alt="" />
                </div>
                <div class="text-start">
                  <p class="title m-0 p-0">{{ card.title }}</p>
                  <p class="sub-title m-0 p-0">{{ card.subTitle }}</p>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>
    <b-row class="py-2">
      <b-col
        v-for="(summery, index) in summeryCards"
        :key="index"
        class="py-2 py-lg-0"
      >
        <b-link class="link">
          <b-card class="text-center">
            <b-card-text>
              <div class="text-center">
                <p class="summery-title m-0 p-0">{{ summery.title }}</p>
                <p class="summery-sub-title m-0 p-0">{{ summery.count }}</p>
                <u class="underline">{{ summery.underline }}</u>
              </div>
            </b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formCards: [
        {
          id: 1,
          title: "গোপন আবেদন ফর্ম",
          subTitle: "গেজেটেড অফিসার",
          cardClass: "classOne",
        },
        {
          id: 2,
          title: "গোপন আবেদন ফর্ম",
          subTitle: "গেজেটেড অফিসার",
          cardClass: "classTwo",
        },
        {
          id: 3,
          title: "গোপন আবেদন ফর্ম",
          subTitle: "গেজেটেড অফিসার",
          cardClass: "classThree",
        },
        {
          id: 4,
          title: "গোপন আবেদন ফর্ম",
          subTitle: "গেজেটেড অফিসার",
          cardClass: "classFour",
        },
      ],
      summeryCards: [
        {
          id: 1,
          title: "মূল্যায়ন বাকি (আই আর ও)",
          count: "১৩৫",
          underline: "তালিকা দেখুন",
        },
        {
          id: 2,
          title: "মূল্যায়ন বাকি (সি আর ও)",
          count: "১৩৫",
          underline: "তালিকা দেখুন",
        },
        {
          id: 3,
          title: "মোট মূল্যায়িত এ সি আর",
          count: "১৩৫",
          underline: "তালিকা দেখুন",
        },
        {
          id: 4,
          title: "মোট কর্মকর্তা-কর্মচারী",
          count: "১২৩৫৬",
          underline: "তালিকা দেখুন",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
}
.classOne {
  background: #364165;
  color: white;
}
.classTwo {
  background: #634373;
  color: white;
}
.classThree {
  background: #3d6851;
  color: white;
}
.classFour {
  background: #333339;
  color: white;
}
.link {
  text-decoration: none;
}
/* 2nd card section */
.summery-title {
  font-style: normal;
  font-weight: 580;
  font-size: 19px;
}
.summery-sub-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
}
.underline {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #eeac49;
}
</style>
