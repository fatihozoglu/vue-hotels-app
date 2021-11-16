<template>
  <div class="app">
    <!-- Nav component -->
    <Nav class="nav-component fixed-top" />

    <!-- If data fetching is not complete, we are showing a div with loading text-->
    <div v-if="!data">Loading...</div>

    <!-- If data fetching is successful and we have the data then we are showing the main component -->
    <main v-else class="main">
      <router-view
        @setGuestData="getGuestData"
        @sendGuestInfo="getGuestInfo"
        :hotelsData="data"
        :guestData="guestData"
        :allGuestInfo="allGuestInfo"
      />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  data() {
    return {
      data: null,
      guestData: null,
      allGuestInfo: null,
    };
  },
  components: {
    Nav,
  },
  methods: {
    //Takes guest data (adult/children guest number, checkin/checkout date, how many days to stay, location)
    getGuestData(val) {
      this.guestData = val;
    },
    //Getting all form data for each guest from child component when all forms are completed by guests
    getGuestInfo(val) {
      this.allGuestInfo = val;
    },
  },
  created() {
    //Fetch data when app component is created
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => (this.data = res));
  },
  mounted() {
    //Add guest data to localStorage and get it back from localStrorage if it exists
    if (localStorage.getItem("guestData")) {
      try {
        this.guestData = JSON.parse(localStorage.getItem("guestData"));
      } catch (e) {
        localStorage.removeItem("guestData");
      }
    }
  },
  watch: {
    //Wathcing changes in guest data to add it to localStorage when it is changed
    guestData(newData) {
      const parsed = JSON.stringify(newData);
      localStorage.setItem("guestData", parsed);
    },
  },
};
</script>

<style scoped>
.app {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.nav-component {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
