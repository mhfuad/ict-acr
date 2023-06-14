<template>
  <b-row class="pt-5 mx-2">
    <b-col cols="12" md="10">
      <p class="navbar-title">স্বাগতম, মোঃ সামসুল আরেফিন</p>
    </b-col>
    <b-col cols="12" md="2">
      <b-row>
        <b-col cols="3" class="py-3">
          <select class="border-0 bg-white">
            <option value="tr">TR</option>
            <option value="en" selected>EN</option>
            <option value="de">DE</option>
          </select>
        </b-col>
        <b-col cols="3">
          <!-- dropdown section -->
          <div>
            <button
              class="btn btn-sm"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              <img
                src="@/assets/images/dashboard/notificationBell.png"
                alt="bell"
              />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <!-- end of dropdown -->
        </b-col>
        <b-col cols="6" class="text-end">
          <img
            height="56"
            width="56"
            class="img-fluid rounded-circle"
            src="@/assets/images/dashboard/kakurChobi.png"
            alt="kaku"
          />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.navbar-title {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
}
</style>
