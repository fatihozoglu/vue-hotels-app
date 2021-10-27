<template>
  <main v-if="hotelsData">
    <Card v-for="hotel in hotelsData" :key="hotel.id" :hotel="hotel" />
  </main>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Home",
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

<style scoped></style>
