<template>
  <b-row class="alignment">
    <hr />
    <b-col
      cols="12"
      class="d-flex flex-column flex-md-row justify-content-between border rounded"
    >
      <b-row class="mt-4">
        <b-col cols="12" class="text-center">
          <img src="../../../assets/images/acr-section/checked.png" alt="" />
        </b-col>
        <b-col cols="12" class="text-center py-1">
          <h5>মুঃ মেসবাহুল আলম</h5>
          <p class="text-muted">আবেদনকারী</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col
          cols="12"
          class="text-center py-4 d-flex flex-column align-items-center"
        >
          <p class="text-muted">অনুরোধ</p>
          <img src="../../../assets/images/acr-section/line.png" alt="" />
          <p class="text-muted">১১ই মার্চ, ২০২২</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12" class="text-center">
          <img src="../../../assets/images/acr-section/checked.png" alt="" />
        </b-col>
        <b-col cols="12" class="text-center py-1">
          <h5>সেলিনা পারভেজ</h5>
          <p class="text-muted">অনুস্বাক্ষরকারী</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col
          cols="12"
          class="text-center py-4 d-flex flex-column align-items-center"
        >
          <p class="text-muted">অনুরোধ</p>
          <img src="../../../assets/images/acr-section/line.png" alt="" />
          <p class="text-muted">১১ই মার্চ, ২০২২</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12" class="text-center">
          <img src="../../../assets/images/acr-section/attester.png" alt="" />
        </b-col>
        <b-col cols="12" class="text-center py-1">
          <h5>হাবিব খান</h5>
          <p class="text-muted">প্রতিস্বাক্ষরকারী</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="border rounded mt-3">
      <b-row class="alignment py-4">
        <b-col cols="12" md="2" class="text-center text-md-start">
          <img src="../../../assets/images/dashboard/kakurChobi.png" alt="" />
        </b-col>
        <b-col
          cols="12"
          md="10"
          class="text-center mt-3 mt-md-0 px-0 px-md-5 px-lg-0 text-md-start"
        >
          <p>মুঃ মেসবাহুল আলম (ID Number)</p>
          <p class="text-muted">Revenue Section, Budget Branch</p>
          <p class="text-muted">jahedul@inflack.com, 01719533062</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="bg-light mt-3">
      <h3 class="mt-3">ব্যক্তিগত তথ্য</h3>
      <b-row class="p-2 bg-white m-2 py-4">
        <b-col class="">
          <b-row class="m-1 p-1 border">
            <b-col cols="12" class="">
              <b-form-group label="শিক্ষাগত যোগ্যতা">
                <b-form-input
                  v-model="form.name"
                  placeholder="শিক্ষাগত যোগ্যতা"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="">
              <b-form-group label="মোট চাকুরীর মেয়াদ">
                <b-form-input
                  v-model="form.name"
                  placeholder="মোট চাকুরীর মেয়াদ"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="">
              <b-form-group label="কোন কোন ভাষা জানেন">
                <b-form-input
                  v-model="form.name"
                  placeholder="কোন কোন ভাষা জানেন"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="">
          <b-row class="m-1 p-1 border">
            <b-col cols="12" class="">
              <b-form-group label="জন্ম তারিখ">
                <b-form-input
                  v-model="form.name"
                  placeholder="জন্ম তারিখ"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="">
              <b-form-group
                label="রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদ"
              >
                <b-form-input
                  v-model="form.name"
                  placeholder="রিপোর্ট প্রদানকারী অফিসারের অধীনে চাকুরীর সঠিক মেয়াদ"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="">
              <b-form-group label="বিশেষ প্রশিক্ষণ">
                <b-form-input
                  v-model="form.name"
                  placeholder="বিশেষ প্রশিক্ষণ"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="bg-light mt-3">
      <h3 class="mt-3">আলোচ্য সময় যে পদে বহাল ছিলেন</h3>
      <b-row class="p-2 bg-white m-2 py-4">
        <b-col class="">
          <b-row class="m-1 p-1 border">
            <b-col cols="12" class="">
              <b-form-group label="পদের নাম">
                <b-form-input
                  v-model="form.name"
                  placeholder="পদের নাম"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="">
              <b-form-group label="বেতন ও বেতন স্কেল">
                <b-form-input
                  v-model="form.name"
                  placeholder="বেতন ও বেতন স্কেল"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="">
          <b-row class="m-1 p-1 border">
            <b-col cols="12" class="">
              <b-form-group label="সময়কাল">
                <b-form-input
                  v-model="form.name"
                  placeholder="সময়কাল"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="bg-white mt-3">
      <h3 class="mt-3 ms-1">২য় খন্ড (অনুস্বাক্ষরকারী অফিসার)</h3>
      <dataTable class="my-3" :tableData="items" :tableLabel="fields" />
    </b-col>
    <b-col cols="12" class="bg-white mt-3">
      <h3 class="mt-3 ms-1">কেবলমাত্র প্রযোজ্য ক্ষেত্রেই</h3>
      <dataTable class="my-3" :tableData="items" :tableLabel="fields" />
    </b-col>
    <b-col cols="12" class="bg-light mt-3">
      <h3 class="mt-3">পদোন্নতির যোগ্যতা</h3>
      <b-row class="p-2 bg-white m-2 py-4">
        <b-col class="">
          <b-row class="m-1 p-1">
            <b-col cols="12" class="">
              <p>
                সমশ্রেণীর অন্যান্য অফিসারের সঙ্গে তুলনাক্রমে নিন্মের সঠিক কলামে
                অনুস্বাক্ষর করিয়া এই অফিসার সম্পর্কে আপনার সাধারণ মূল্যায়ন
                লিপিবদ্ধ করুণঃ-
              </p>
            </b-col>
            <b-col cols="12" class="">
              <b-form-group>
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="A"
                  >সমাজকল্যাণ কার্যাবলীতে আগ্রহী</b-form-radio
                >
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                  >তাঁহার কর্তব্যের এই দিকটিকে রুটিন মাফিক দায়িত্ব হিসাবে গণ্য
                  করার প্রবণতা রহিয়াছে</b-form-radio
                >
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="">
          <b-row class="m-1 p-1 ">
            <b-col cols="12" class="">
              <b-form-group label="নিম্নের সঠিক সিদ্ধান্ত নির্বাচন করুন">
                <b-form-group>
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                    >দ্রুত পদোন্নতির সুপারিশ করা হইলো</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >পদোন্নতির যোগ্য</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >সম্প্রতি পদোন্নতির হইয়াছে, আরো পদোন্নতি সম্পর্কে মূল্যায়নের
                    সময় হয় নাই</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >এখনো পদোন্নতির যোগ্য নেহেন, কিন্তু কালক্রমে যোগ্য হইতে
                    পারেন</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >আরো পদোন্নতির অযোগ্য, সর্বোচ্চ সীমায়
                    পৌঁছিয়েছেন</b-form-radio
                  >
                </b-form-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
            <label for="" class="py-2">বিশেষ প্রবণতা থাকিলে উহার উপর মন্তব্য যেমন :- ( সচিবালয় , প্রশাসন , বিচার বিভাগ , উন্নয়ন বা কূটনীতি সম্পর্কিত কার্য )</label>
            <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="বিশেষ প্রবণতা থাকিলে উহার উপর মন্তব্য "
      rows="3"
      max-rows="6"
    ></b-form-textarea>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
import dataTable from "../../../components/common-table/table.vue";

export default {
  components: {
    dataTable,
  },
  data() {
    return {
        text:'',
      selected: "A",
      form: {
        name: "",
      },
      items: [
        {
          id: "০১।",
          type: "ধীশক্তি ও মানসিক তৎপরতা",

          comment:
            "উল্লেখিত এসিআর আবেদনকারীর ধীশক্তি ও মানসিক তৎপরতা চলতি মানের চেয়ে নিন্মে",
          answer: "উত্তম",
          signature: "signature",
        },
        {
          id: "০২।",
          type: "ধীশক্তি ও মানসিক তৎপরতা",

          comment:
            "উল্লেখিত এসিআর আবেদনকারীর ধীশক্তি ও মানসিক তৎপরতা চলতি মানের চেয়ে নিন্মে",
          answer: "উত্তম",
          signature: "signature",
        },
        {
          id: "০২।",
          type: "ধীশক্তি ও মানসিক তৎপরতা",

          comment:
            "উল্লেখিত এসিআর আবেদনকারীর ধীশক্তি ও মানসিক তৎপরতা চলতি মানের চেয়ে নিন্মে",
          answer: "উত্তম",
          signature: "signature",
        },
      ],

      fields: [
        {
          key: "id",
          label: "ক্র:",
          sortable: true,
        },
        {
          key: "type",
          label: "ধরণ",
          sortable: true,
        },
        {
          key: "answer",
          label: "উত্তর",
        },
        {
          key: "comment",
          label: "মন্তব্য",
        },

        {
          key: "signature",
          label: "সিগনেচার",
        },
      ],
    };
  },
};
</script>

<style scoped>
.alignment {
  margin-left: 20px !important;
  margin-right: 20px !important;
}
</style>
