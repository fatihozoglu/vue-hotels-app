<template>
  <div id="app">
    <Nav class="nav-component fixed-top" />
    <div class="row">
      <main class="main"><router-view /></main>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  margin: 0 auto;
}
.nav-component {
  width: 100%;
  padding: 20px 50px;
}
.main {
  padding: 150px 50px 50px 100px;
}
</style>
