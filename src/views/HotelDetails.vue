<template>
  <main class="main">
    <!-- Hotel details information is shown here(name, stars, adress)-->
    <div class="d-flex">
      <h4 class="hotel-name m-0 me-2">{{ selectedHotel.name }}</h4>
      <Star class="m-0" :num="selectedHotel.star" />
    </div>
    <p class="hotel-location">
      <i
        style="color: #1677cc; font-size: 20px"
        class="fa fa-map-marker me-2"
        aria-hidden="true"
      ></i
      >{{ selectedHotel.adress }}
    </p>
    <div class="d-flex gap-5">
      <!-- Carousel for showing selected hotel's detail photos -->
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade w-50"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(item, index) in selectedHotel.detailPhotos"
            :key="index"
            class="carousel-item"
            :class="[index === 1 ? 'active' : '']"
          >
            <img
              :src="require(`../assets/${item}`)"
              class="d-block w-100 rounded"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Carousel ends here -->

      <!-- Shows the booking details(checkin date, checkout date, days, room number, price) -->
      <div class="w-50">
        <h2 class="heading">Booking Details</h2>
        <div
          class="
            booking-details
            w-100
            p-3
            d-flex
            align-items-start
            justify-content-between
            mb-3
          "
        >
          <div>
            <p class="m-0 details-heading">Check-in Date</p>
            <p class="m-0 details-body">{{ guestData.checkinDate }}</p>
            <small class="m-0">From 3:00 PM</small>
          </div>
          <div>
            <p class="m-0 details-heading">Check-out Date</p>
            <p class="m-0 details-body">{{ guestData.checkoutDate }}</p>
            <small class="m-0">{{ guestData.days }} night(s) stay</small>
          </div>
          <div>
            <p class="m-0 details-heading">Guests</p>
            <p class="m-0 details-body">{{ guestData.adult }} Adult(s)</p>
            <p class="m-0 details-body" v-if="guestData.children !== 0">
              {{ guestData.children }} Children
            </p>
          </div>
        </div>
        <div
          class="
            booking-details
            w-100
            p-3
            d-flex
            align-items-start
            justify-content-between
            mb-4
          "
        >
          <div>
            <p class="m-0 details-heading">Rooms</p>
            <p class="m-0 details-body">{{ guestData.room }} Room(s)</p>
          </div>
          <div>
            <p class="m-0 details-heading">Room Price</p>
            <p class="m-0 details-body">
              {{
                (selectedHotel.price * guestData.room * guestData.days)
                  | dollarSign
              }}
            </p>
          </div>
          <div>
            <p class="m-0 details-heading">Taxes</p>
            <p class="m-0 details-body">
              {{
                ((selectedHotel.price * guestData.room * guestData.days * 18) /
                  100)
                  | dollarSign
              }}
            </p>
          </div>
          <div>
            <p class="m-0 details-heading">Total Price</p>
            <p class="m-0 details-body">
              {{
                (selectedHotel.price * guestData.room * guestData.days +
                  (selectedHotel.price * guestData.room * guestData.days * 18) /
                    100)
                  | dollarSign
              }}
            </p>
          </div>
        </div>

        <!-- Route for going reservation page and sending selected hotel information to the reservation page -->
        <router-link
          :to="{
            name: 'Reservation',
            params: { selectedHotel: selectedHotel },
          }"
          ><button class="book-btn rounded w-100">Book Now</button></router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import Star from "../components/Star.vue";
import dollarSign from "../mixins/Filters";

export default {
  name: "HotelDetails",
  data() {
    return {
      selectedHotel: null,
    };
  },
  mixins: [dollarSign],
  props: {
    hotelsData: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    guestData: { type: Object, required: true },
  },
  components: {
    Star,
  },
  // Shows the selected hotel based on the name parameter coming from router in hotels/hotel-name-here format
  created() {
    this.selectedHotel = this.hotelsData.find(
      (item) => item.name.split(" ").join("-") === this.name
    );
  },
};
</script>

<style scoped>
.main {
  background-color: #f5f5f5;
  padding: 120px 50px 50px 50px;
  min-height: 100vh;
}
.carousel {
  width: 50%;
}
.book-btn {
  text-decoration: none;
  padding: 20px 100px;
  color: white;
  background-color: #1a4a8d;
  border: none;
}
.book-btn:hover {
  background-color: #043580;
}
.hotel-name {
  font-size: 25px;
  font-weight: 700;
}
.hotel-location {
  font-size: 14px;
  font-weight: 400;
}
.booking-details {
  border: 1px solid rgb(197, 197, 197);
  border-radius: 3px;
}
.heading {
  font-size: 24px;
  font-weight: 600;
  color: rgb(51, 51, 51);
}
.details-heading {
  font-size: 14px;
  font-weight: 700;
}
.details-body {
  font-size: 16px;
  font-weight: 700;
  color: rgb(0, 113, 194);
}
small {
  font-size: 14px;
  font-weight: 400;
  color: #6b6b6b;
}
</style>
