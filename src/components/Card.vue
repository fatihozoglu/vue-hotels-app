<template>
  <div class="custom-card mb-3">
    <img
      :src="require(`../assets/${hotel.photo}`)"
      class="card-img rounded me-3"
      alt="hotel"
    />
    <div>
      <h5 class="card-title blue mb-1">
        {{ hotel.name }}
      </h5>
      <p class="card-text mb-1">
        <Star :num="hotel.star" />
      </p>
      <p class="card-text blue mb-2">
        {{ hotel.location }}
      </p>
      <p class="card-text">
        {{ hotel.type }}
        <span class="d-block">{{ hotel.bed }}</span>
      </p>
      <p class="card-text green mb-3">
        {{ hotel.cancel }}
      </p>
      <router-link
        :to="{ name: 'Details', params: { id: hotel.id } }"
        class="book-btn rounded"
        >Book a Room</router-link
      >
    </div>
  </div>
</template>

<script>
import Star from "../components/Star.vue";
export default {
  name: "Card",
  components: {
    Star,
  },
  props: {
    hotel: Object,
  },
};
</script>

<style scoped>
.custom-card {
  width: 100%;
  min-width: 583px;
  height: 220px;
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
}

.book-btn:hover {
  background-color: #043580;
}
</style>
