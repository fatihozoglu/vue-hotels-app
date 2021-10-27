<template>
  <div>
    <ResForm v-for="(i, ind) in guestNumber" :key="ind" :num="i" />
    <div class="btn-block">
      <button type="submit">Submit</button>
    </div>
  </div>
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
