<template>
  <main v-if="hotelsData">
    <Card v-for="hotel in hotelsData" :key="hotel.id" :hotel="hotel" />
  </main>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
  data() {
    return {
      hotelsData: null,
    };
  },
  components: {
    Card,
  },
  created() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => (this.hotelsData = data));
  },
};
</script>

<style scoped></style>
