<template>
  <div class="main">
    <!-- This part shows the guest preferences based on inputs in home page -->
    <div class="search-area">
      <h2>Search</h2>
      <div class="w-100 mb-1">
        <label> Destination/Property Name: </label>
        <div class="search-input d-flex align-items-center ps-2">
          <svg
            aria-hidden="true"
            fill="#333333"
            focusable="false"
            height="20"
            role="presentation"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56zm1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65c2.12 4.987 7.881 7.312 12.87 5.192 4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06z"
            ></path>
          </svg>
          <div class="result ms-3">{{ guestData.location }}</div>
        </div>
      </div>
      <div class="w-100 mb-1">
        <label> Check-in date </label>
        <div class="search-input d-flex align-items-center ps-2">
          <svg
            aria-hidden="true"
            fill="#333333"
            focusable="false"
            height="20"
            role="presentation"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"
            ></path>
          </svg>
          <div class="result ms-3">{{ guestData.checkinDate }}</div>
        </div>
      </div>
      <div class="w-100 mb-1">
        <label> Check-out date</label>
        <div class="search-input d-flex align-items-center ps-2 mb-1">
          <svg
            aria-hidden="true"
            fill="#333333"
            focusable="false"
            height="20"
            role="presentation"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"
            ></path>
          </svg>
          <div class="result ms-3">{{ guestData.checkoutDate }}</div>
        </div>
        <small class="d-block">{{ guestData.days }} night stay</small>
      </div>
      <div class="w-100 mb-2">
        <div class="result search-input d-flex align-items-center ps-2">
          {{ guestData.adult }} adults
        </div>
      </div>
      <div class="d-flex gap-2 w-100 mb-2">
        <div class="result search-input w-50 d-flex align-items-center ps-2">
          {{ guestData.children }} children
        </div>
        <div class="result search-input w-50 d-flex align-items-center ps-2">
          {{ guestData.room }} room
        </div>
      </div>
      <router-link :to="{ name: 'Home' }"
        ><button class="search-btn">Search</button></router-link
      >
    </div>
    <!-- Container for card components -->
    <div class="card-container" v-if="hotelsData">
      <h3 class="header mb-3">
        {{ guestData.location }}: {{ selectedLocationHotels.length }} properties
        found
        <!--Generating card components based on our hotels data-->
      </h3>
      <Card
        v-for="hotel in selectedLocationHotels"
        :key="hotel.id"
        :hotel="hotel"
        :guestData="guestData"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "HotelResults",
  props: {
    hotelsData: {
      type: Array,
      required: true,
    },
    guestData: {
      type: Object,
    },
  },
  computed: {
    //Filters the results based on selected location by the guest
    selectedLocationHotels() {
      return this.hotelsData.filter(
        (item) => item.location === this.guestData.location
      );
    },
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  display: grid;
  column-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f5f5f5;
  padding: 120px 70px 50px 70px;
}
.search-area {
  position: fixed;
  top: 120px;
  background-color: #fcbb01;
  width: 270px;
  padding: 20px 20px;
  border-radius: 3px;
}
.card-container {
  grid-column-start: 2;
  grid-column-end: 5;
}
.search-input {
  height: 36px;
  background-color: white;
  border-radius: 2px;
}
.search-btn {
  width: 100%;
  height: 50px;
  background-color: #1471c2;
  color: white;
  border: none;
  border-radius: 2px;
  outline: none;
}
label,
small {
  font-size: 12px;
  font-weight: 400;
}
h2 {
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
}
.result {
  font-size: 14px;
  font-weight: 400;
}
.header {
  font-size: 24px;
  font-weight: 700;
}

@media only screen and (max-width: 1200px) {
  .main {
    grid-template-columns: 1fr;
  }
  .search-area {
    display: none;
  }
  .card-container {
    grid-column-start: 1;
    grid-column-end: 2;
  }
}
</style>
