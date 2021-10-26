<template>
  <div>
    <img :src="require(`../assets/${hotelData.photo}`)" alt="hotel" />
  </div>
</template>

<script>
import data from "../../public/data.json";

export default {
  name: "Details",
  data() {
    return {
      hotelData: null,
    };
  },
  created() {
    let selectedHotel = data.find((item) => item.id === this.$route.params.id);
    this.hotelData = selectedHotel;
  },
};
</script>

<style scoped></style>
