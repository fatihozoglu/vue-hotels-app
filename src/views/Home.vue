<template>
  <main class="home">
    <h1 class="home-heading mb-0">
      Find deals on hotels, homes, and much more...
    </h1>
    <p class="home-text mb-5">
      From cozy country homes to funky city apartments
    </p>
    <!-- All inputs are enclosed into input-container -->
    <div class="input-container">
      <input
        v-model="location"
        class="location-input"
        type="text"
        placeholder="Where are you going?"
      />
      <!-- Date inputs starts here-->
      <div class="date-input-container">
        <span style="width: 45%; text-align: center">{{ checkinDate }}</span>
        <span style="width: 10%">-</span>
        <span style="width: 45%; text-align: start">{{ checkoutDate }}</span>
        <input v-model="checkinDate" class="datepicker-input" type="date" />
        <input
          v-model="checkoutDate"
          class="datepicker-input checkout"
          type="date"
        />
      </div>
      <!-- Date inputs ends here-->

      <!-- Toggling guest input number selection when mouse enters and leaves the input area-->
      <div
        class="guest-input"
        @mouseenter="isSelectionOpen = true"
        @mouseleave="isSelectionOpen = false"
      >
        <div class="guest-input-header">
          <span class="me-2">{{ adultNum }} Adults</span
          ><span class="me-2">-</span
          ><span class="me-2">{{ childrenNum }} Children</span
          ><span class="me-2">-</span>
          <span>{{ roomNum }} Room</span>
        </div>
        <div v-show="isSelectionOpen" class="guest-input-body w-100">
          <div class="d-flex align-items-center w-100 mb-3">
            <span class="w-50">Adult</span>
            <div class="d-flex align-items-center w-50">
              <button
                @click="adultNum === 1 ? null : adultNum--"
                class="guest-btn"
              >
                -</button
              ><span class="count-span ms-3 me-3">{{ adultNum }}</span
              ><button
                @click="adultNum === 10 ? null : adultNum++"
                class="guest-btn"
              >
                +
              </button>
            </div>
          </div>
          <div class="d-flex align-items-center w-100 mb-3">
            <span class="w-50">Children</span>
            <div class="d-flex align-items-center w-50">
              <button
                @click="childrenNum === 0 ? null : childrenNum--"
                class="guest-btn"
              >
                -</button
              ><span class="count-span ms-3 me-3">{{ childrenNum }}</span
              ><button
                @click="childrenNum === 10 ? null : childrenNum++"
                class="guest-btn"
              >
                +
              </button>
            </div>
          </div>
          <div class="d-flex align-items-center w-100">
            <span class="w-50">Room</span>
            <div class="d-flex align-items-center w-50">
              <button
                @click="roomNum === 1 ? null : roomNum--"
                class="guest-btn"
              >
                -</button
              ><span class="count-span ms-3 me-3">{{ roomNum }}</span
              ><button
                @click="roomNum === 10 ? null : roomNum++"
                class="guest-btn"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--Accomodation information is sent to parent(App) component and goes to HotelResults route-->
      <router-link class="search-button" :to="{ name: 'HotelResults' }"
        ><button @click="setGuestData">Search</button></router-link
      >
    </div>

    <!-- Some city photos and names for decoration -->
    <h2>Destination Ideas</h2>
    <div class="destination-ideas">
      <div class="destination1">
        <p class="dest-name">San Francisco</p>
      </div>
      <div class="destination2">
        <p class="dest-name">New York</p>
      </div>
      <div class="destination3">
        <p class="dest-name">San Diego</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isSelectionOpen: false,
      location: "Las Vegas",
      checkinDate: null,
      checkoutDate: null,
      adultNum: 1,
      childrenNum: 0,
      roomNum: 1,
    };
  },
  methods: {
    //When inputs are filled by the guest and search button clicked, emits setGuestData event and sends data to parent(App) component
    setGuestData() {
      this.$emit("setGuestData", {
        location: this.location,
        adult: this.adultNum,
        children: this.childrenNum,
        room: this.roomNum,
        days: this.calculateDays,
        checkinDate: this.checkinDate,
        checkoutDate: this.checkoutDate,
      });
    },
    // Getting current date and giving it as initial value to checkinDate
    today() {
      let today = new Date();
      today = `${today.getFullYear()}-${today.getMonth() + 1}-${
        today.getDate().length === 2 ? today.getDate() : "0" + today.getDate()
      }`;
      this.checkinDate = today;
    },
    //Getting tomorrow date and giving it as initial value to checkoutDate
    tomorrow() {
      let today = Date.now();
      let tomorrow = new Date(today + 86400000);
      tomorrow = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${
        tomorrow.getDate().length === 2
          ? tomorrow.getDate()
          : "0" + tomorrow.getDate()
      }`;
      this.checkoutDate = tomorrow;
    },
  },
  computed: {
    //Calculates the accommodation days based on checkin and checkout dates
    calculateDays() {
      let checkin = new Date(this.checkinDate);
      let checkout = new Date(this.checkoutDate);
      if (checkin >= checkout) {
        this.today();
        this.tomorrow();
        return 1;
      } else {
        let difference = checkout.getTime() - checkin.getTime();
        return difference / (1000 * 3600 * 24);
      }
    },
  },
  mounted() {
    // Set checkin and checkout dates as today and tomorrow when the component is mounted
    this.today();
    this.tomorrow();
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 130px 60px 30px 60px;
  background-color: #f5f5f5;
  color: rgb(51, 51, 51);
}
.home-heading {
  font-size: 24px;
  font-weight: 600;
}
.home-text {
  font-size: 14px;
  font-weight: 400;
}
.input-container {
  width: 100%;
  border: 4px solid #fcbb01;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 50px;
}
.location-input,
.date-input-container {
  height: 52px;
  outline: none;
  border: none;
  padding-left: 50px;
  display: flex;
  align-items: center;
}
.location-input {
  grid-column-start: 1;
  grid-column-end: 3;
  background-image: url("https://cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg");
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: center;
  border-right: 4px solid #fcbb01;
}
.date-input-container {
  font-size: 16px;
  position: relative;
  grid-column-start: 3;
  grid-column-end: 5;
  background-color: white;
  background-image: url("https://cdn2.iconfinder.com/data/icons/web/512/Calendar-512.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: center;
  border-right: 4px solid #fcbb01;
}
.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.checkout {
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
}
.guest-input {
  position: relative;
  height: 52px;
  grid-column-start: 5;
  grid-column-end: 7;
  padding-left: 45px;
  background-color: white;
  background-image: url(//cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg);
  background-size: 16px;
  background-repeat: no-repeat;
  background-position-x: 15px;
  background-position-y: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: 4px solid #fcbb01;
}
.guest-input-body {
  padding: 20px;
  background-color: white;
  position: absolute;
  top: 52px;
  left: 0;
}
.guest-btn {
  width: 40px;
  height: 40px;
  background-color: white;
  color: #005999;
  border: 1px solid #005999;
  border-radius: 3px;
}
.guest-btn:hover {
  color: white;
}
.search-button {
  grid-column-start: 7;
  grid-column-end: 8;
}
.count-span {
  width: 20%;
  text-align: center;
}
button {
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  color: white;
  background-color: #1471c2;
  height: 100%;
  width: 100%;
}
button:hover {
  background-color: #005999;
}
h2 {
  font-size: 24px;
  font-weight: 600;
  color: black;
}
.destination-ideas {
  width: 100%;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
}
.destination1 {
  background: url(https://cf.bstatic.com/xdata/images/city/540x270/689394.webp?k=23b0050a839e18850cc6b64186787bdd846385ae280f2bdff2ced0a438f72112&o=)
    no-repeat center center;
  background-size: cover;
}
.destination2 {
  background: url(https://cf.bstatic.com/xdata/images/city/540x270/856674.webp?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=)
    no-repeat center center;
  background-size: cover;
}
.destination3 {
  background: url(https://cf.bstatic.com/xdata/images/city/540x270/689373.webp?k=653f4e64198a8728a4ca792a53cc44103b1c1ab8ab3a0328033fb253383ea13e&o=)
    no-repeat center center;
  background-size: cover;
}
.dest-name {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(38, 38, 38, 1) 100%
  );
  padding: 10px 20px;
  font-size: 30px;
  font-weight: 600;
  color: rgb(241, 241, 241);
  text-shadow: 1px 1px #030303;
}
.error {
  color: red;
}

@media only screen and (max-width: 1000px) {
  .input-container {
    grid-template-columns: 1fr;
  }
  .location-input,
  .date-input-container,
  .guest-input {
    grid-column-start: 1;
    grid-column-end: 2;
    border-right: none;
    border-bottom: 4px solid #fcbb01;
  }
  .search-button {
    grid-column-start: 1;
    grid-column-end: 2;
    height: 52px;
  }
}
@media only screen and (max-width: 800px) {
  .destination-ideas {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .destination1,
  .destination2,
  .destination3 {
    height: 250px;
  }
}
</style>
