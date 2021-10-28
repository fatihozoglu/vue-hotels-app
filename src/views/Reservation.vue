<template>
  <main class="main">
    <ResForm v-for="(item, index) in guestNumber" :key="index" :num="item" />
    <div class="btn-block">
      <button type="submit">Submit</button>
    </div>
  </main>
</template>

<script>
import ResForm from "../components/ResForm.vue";

export default {
  name: "Reservation",
  components: {
    ResForm,
  },
  props: {
    guestNumber: Number,
  },
};
</script>

<style scoped>
.main {
  background-color: #f5f5f5;
  padding: 120px 50px 50px 50px;
  min-height: 100vh;
}
.btn-block {
  margin-top: 10px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #1a4a8d;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: #14396d;
}
</style>
