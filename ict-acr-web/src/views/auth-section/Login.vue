<template>
  <b-row
    class="bg d-flex flex-column flex-lg-row align-items-center justify-content-center"
  >
    <b-col class="">
      <b-row class="logo-section rounded">
        <b-col cols="12">
          <img
            src="@/assets/images/auth-section/IctDivisionLogo.png"
            alt="ICT Logo"
          />
        </b-col>
        <b-col cols="12" class="text-white">
          <h3 class="mt-5">Welcome To</h3>
          <h1 class="title mt-4">
            Annual Confidential Report (ACR) Service Portal
          </h1>
          <b-col cols="12" class="text-center custom-padding">
            <b-row class="d-flex flex-row justify-content-between">
              <b-col class="custom-padding">
                <b-link>
                  <img src="@/assets/images/auth-section/slowganOne.png" alt=""
                /></b-link>
              </b-col>
              <b-col class="custom-padding">
                <b-link>
                  <img src="@/assets/images/auth-section/slowganTwo.png" alt=""
                /></b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-col>
      </b-row>
    </b-col>

    <b-col class=" ">
      <b-row class="logo-section bg-white rounded px-5">
        <b-col cols="12" class="text-start">
          <p class="sign-in-title mt-5">সাইন ইন</p>
          <p class="sign-in-info">
            সিস্টেম টি ব্যবহারের জন্য আপনার রেজিস্ট্রেশনে ব্যবহৃত ইউজার নেম বা
            ইউজার আইডি এবং সঠিক পাসওয়ার্ড দিয়ে লগইন করুন।
          </p>
        </b-col>
        <b-col cols="12" class="text-start">
          <b-form @submit="onSubmit">
            <b-form-group
              id="username"
              label="ইউজার নেম/আইডি"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="form.username"
                type="text"
                placeholder="সঠিক আইডি বা ইউজার নেম দিন"
                required
              />
            </b-form-group>
            <b-form-group id="password" label="পাসওয়ার্ড" label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                placeholder="সঠিক পাসওয়ার্ড দিন"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group class="text-center custom-padding">
              <b-button
                type="submit"
                class="btn btn-lg submit-btn-color w-50"
                
                >লগইন</b-button
              >
              <!-- @click="login" -->
            </b-form-group>
          </b-form>
          <b-col cols="12" class="text-center">
            <b-link class="text-danger">পাসওয়ার্ড ভুলে গিয়েছেন?</b-link>
            <b-row class="d-flex flex-row justify-content-between py-4">
              <b-col class="custom-padding">
                <b-link
                  ><img src="@/assets/images/auth-section/helpDesk.png" alt=""
                /></b-link>
              </b-col>
              <b-col class="custom-padding">
                <b-link
                  ><img src="@/assets/images/auth-section/email.png" alt=""
                /></b-link>
              </b-col>
              <b-col class="custom-padding">
                <b-link
                  ><img
                    src="@/assets/images/auth-section/userManual.png"
                    alt=""
                /></b-link>
              </b-col>
              <b-col class="custom-padding">
                <b-link
                  ><img src="@/assets/images/auth-section/tutorial.png" alt=""
                /></b-link>
              </b-col>
            </b-row>
          </b-col>
        </b-col>
      </b-row>
      <!-- this is slowgan section -->
    </b-col>
  </b-row>
</template>

<script>
import { Form, Field } from 'vee-validate';
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    Form,
    Field,
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    login() {
      console.log("====================================");
      console.log(this.form);
      console.log("====================================");
    },
  },
};
</script>

<style scoped>
/* background section starts here */
.bg {
  /* The image used */
  background-image: url("@/assets/images/auth-section/loginBackground.jpg");
  height: 100vh !important;
  width: 100% !important;
  position: absolute !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}
/* left section starts here */
.title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
}
.logo-section {
  margin: 150px;
}

/* right section starts here */
.sign-in-title {
  font-weight: 400;
  font-size: 40px;
  color: #333339;
}
.sign-in-info {
  font-weight: 400;
  font-size: 18px;
  color: rgba(38, 50, 56, 0.6);
}
.submit-btn-color {
  background: #333339;
}
.form-section {
  height: 10px !important;
}
.custom-padding {
  padding-top: 50px;
}

/* media query section */
@media only screen and (max-width: 1440px) {
  .title {
    font-weight: 700;
    font-size: 45px;
    text-align: center;
  }
  .logo-section {
    margin: 30px;
  }
  .custom-padding {
    padding: 0;
  }
}
</style>
