<template>
  <div class="custom-card mb-3">
    <!-- Hotel image-->
    <img
      :src="require(`../assets/${hotel.photo}`)"
      class="card-img rounded me-3"
      alt="hotel"
    />
    <!--Hotel details (name,rooms,price)-->
    <div class="w-50">
      <h5 class="card-title blue mb-1">
        {{ hotel.name }}
      </h5>
      <p class="card-text mb-1">
        <Star :num="hotel.star" />
      </p>
      <p class="card-text blue mb-2">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        {{ hotel.location }}
      </p>
      <p class="card-text">
        {{ hotel.type }}
        <span class="d-block">{{ hotel.bed }}</span>
      </p>
      <p class="card-text green mb-3">
        {{ hotel.cancel }}
      </p>
    </div>
    <!-- Rating and stars -->
    <div class="ms-auto d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-end">
        <div class="d-flex flex-column">
          <span class="me-2">{{ setRatingText }}</span>
          <small>652 Reviews</small>
        </div>
        <div class="rating ms-1">{{ hotel.rating }}</div>
      </div>
      <div class="d-flex flex-column align-items-end">
        <small class="ms-auto"
          >{{ guestData.days }} night, {{ guestData.adult }} adults,
          {{ guestData.room }} room(s)</small
        >
        <p class="my-0 h4">
          {{ (hotel.price * guestData.days * guestData.room) | dollarSign }}
        </p>
        <small>+{{ tax | dollarSign }} taxes and charges</small>
        <router-link
          :to="{ name: 'HotelDetails', params: { name: hotelName } }"
          class="book-btn rounded d-block mt-2"
          >See Availability</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../components/Star.vue";
import dollarSign from "../mixins/Filters";

export default {
  name: "Card",
  components: {
    Star,
  },
  props: {
    hotel: Object,
    guestData: Object,
  },
  mixins: [dollarSign],
  computed: {
    //Transforms hotel name into "hotels/hotel-name-here"
    hotelName() {
      return this.hotel.name.split(" ").join("-");
    },
    //We are setting rating of the hotel based on the points from users
    setRatingText() {
      if (this.hotel.rating > 9) return "Wonderful";
      else if (this.hotel.rating > 8.5) return "Excellent";
      else if (this.hotel.rating > 8) return "Very Good";
      else return "Good";
    },
    //Calculating 18% tax for hotel price
    tax() {
      return (this.hotel.price * this.guestData.days * 18) / 100;
    },
  },
};
</script>

<style scoped>
.custom-card {
  display: flex;
  padding: 10px;
  border: 1px solid rgb(187, 187, 187);
  border-radius: 5px;
}
.card-img {
  max-height: 200px;
  max-width: 200px;
}
.card-title {
  font-size: 20px;
  font-weight: 700;
}
.card-text {
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.blue {
  color: rgb(0, 113, 194);
}
.green {
  color: rgb(0, 128, 9);
  font-weight: 700;
}
.book-btn {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  background-color: rgb(0, 113, 194);
  text-align: center;
}

.book-btn:hover {
  background-color: #043580;
}

.rating {
  font-size: 16px;
  font-weight: 500;
  width: 32px;
  height: 32px;
  background-color: #043580;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 5px 0;
}

small {
  font-size: 12px;
  font-weight: 400;
  color: rgb(107, 107, 107);
}
</style>
