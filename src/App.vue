<template>
  <div id="app">
    <Nav class="nav-component fixed-top" />
    <div class="row">
      <main v-if="hotelsData" class="main">
        <router-view
          @sendData="getNumber"
          :hotelsData="hotelsData"
          :guestNumber="guestNumber"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  data() {
    return {
      hotelsData: null,
      guestNumber: null,
    };
  },
  components: {
    Nav,
  },
  methods: {
    getNumber(val) {
      this.guestNumber = val;
    },
  },
  created() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => (this.hotelsData = data));
  },
};
</script>

<style scoped>
#app {
  width: 100%;
}
.nav-component {
  width: 100%;
  padding: 20px 50px;
}
.main {
  padding: 120px 50px 50px 100px;
}
</style>
