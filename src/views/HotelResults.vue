<template>
  <main class="main" v-if="hotelsData">
    <Card v-for="hotel in hotelsData" :key="hotel.id" :hotel="hotel" />
  </main>
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
  },
  components: {
    Card,
  },
};
</script>

<style scoped>
.main {
  background-color: #f5f5f5;
  padding: 120px 50px 50px 50px;
}
</style>
