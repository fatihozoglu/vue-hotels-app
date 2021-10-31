<template>
  <main class="main">
    <ResForm
      v-for="(item, index) in guestData.adult + guestData.children"
      :key="index"
      :num="item"
      ref="formArray"
      @formCompleted="nextForm"
    />
  </main>
</template>

<script>
import ResForm from "../components/ResForm.vue";

export default {
  name: "Reservation",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    ResForm,
  },
  props: {
    guestData: Object,
    selectedHotel: Object,
  },
  methods: {
    nextForm() {
      this.count++;
      this.$refs.formArray[this.count].focus();
    },
  },
  mounted() {
    this.$refs.formArray[0].focus();
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
