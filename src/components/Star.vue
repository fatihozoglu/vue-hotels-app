<template>
  <div class="star-component d-flex align-items-center">
    <!-- Producing stars based on prop (num)-->
    <div v-for="(item, index) of num" :key="index">
      <span class="fa fa-star yellow"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Star",
  props: {
    num: Number,
  },
};
</script>

<style scoped>
.yellow {
  font-size: 16px;
  color: #fcba03;
}
</style>
