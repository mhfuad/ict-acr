<template>
  <b-row class="text-center mx-1 ">
    <b-col cols="12" md   class="px-3 py-3 " v-for="(card, index) in formCards" :key="index">
      <b-link class="link">
        <b-row class="text-center card" :class="card.cardClass">
          <b-col cols="12" class="pt-5">
            <p class="m-0 p-0 title">মোট</p>
            <p class="title m-0 p-0">{{ card.title }}</p>
          </b-col>
          <b-col
            cols="12"
            class="d-flex justify-content-center align-items-center py-2"
          >
            <div class="rounded-circle parcentage">
              <div class="percentage-number">
                <p class="mt-2">{{ card.parcentage }}</p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" class="py-2">
            <p class="sub-title m-0 p-0">{{ card.count }}</p>
          </b-col>
          <b-col cols="12" class="pt3 pb-5">
            <u class="sub-title m-0 p-0">{{ card.underline }}</u>
          </b-col>
        </b-row>
      </b-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      formCards: [
        {
          id: 1,
          title: "গেজেটেড অফিসার",
          count: " ২৩,৫২০ জন",
          parcentage: "৩৫%",
          underline: "তালিকা দেখুন",
          cardClass: "classOne",
        },
        {
          id: 2,
          title: "নন-গেজেটেড অফিসার",
          count: " ২৩,৫২০ জন",
          parcentage: "৩৫%",
          underline: "তালিকা দেখুন",
          cardClass: "classTwo",
        },
        {
          id: 3,
          title: "গেজেটেড ক্যাডার অফিসার",
          count: " ২৩,৫২০ জন",
          parcentage: "৩৫%",
          underline: "তালিকা দেখুন",
          cardClass: "classThree",
        },
      ],
    };
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
}
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
  background: linear-gradient(
    180deg,
    #bcffe8 0%,
    rgba(188, 255, 232, 0) 128.28%
  );
  color: #2f3349;
}
.classTwo {
  background: linear-gradient(
    180deg,
    #eff5cd 0%,
    rgba(239, 245, 205, 0) 126.55%
  );
  color: #2f3349;
}
.classThree {
  background: linear-gradient(
    180deg,
    #95f2ff 0%,
    rgba(149, 242, 255, 0) 128.28%
  );
  color: #2f3349;
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
.parcentage {
  height: 100px;
  width: 100px;
  background: #389a94;
}
.percentage-number {
  padding: 25px;
}
@media only screen and (max-width: 1440px) {
  .title {
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
}

.sub-title {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
}
</style>
