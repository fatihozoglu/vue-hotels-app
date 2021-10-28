<template>
  <main class="main" v-if="selectedHotel">
    <h4 class="mb-0">{{ selectedHotel.name }}</h4>
    <Star :num="selectedHotel.star" />
    <p>
      <i class="fa fa-map-marker me-2" aria-hidden="true"></i
      >{{ selectedHotel.location }}
    </p>
    <div class="d-flex gap-5">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
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
      <div>
        <p class="num-select rounded">How many adults are coming?</p>
        <div class="mb-3">
          <select class="rounded mb-5" v-model="guestNumber">
            <option v-for="(i, ind) in 10" :key="ind" :value="i">
              {{ i }}
            </option>
          </select>
        </div>
        <router-link :to="{ name: 'Reservation' }"
          ><button class="book-btn rounded" @click="setGuestNumber">
            Book Now
          </button></router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import Star from "../components/Star.vue";

export default {
  name: "HotelDetails",
  data() {
    return {
      selectedHotel: null,
      guestNumber: 1,
    };
  },
  props: {
    hotelsData: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    Star,
  },
  methods: {
    setGuestNumber() {
      this.$emit("setGuestNumber", this.guestNumber);
    },
  },
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
.num-select {
  padding: 10px 30px;
  background-color: #1a4a8d;
  color: white;
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

select {
  width: 50px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #1a4a8d;
  outline: none;
}
</style>
