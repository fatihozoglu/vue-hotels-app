<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand me-5" to="/"
        ><img class="img-fluid" alt="logo" src="../assets/logo.png"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Stays</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Flights</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Car Rentals</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.navbar {
  background-color: #043580;
  color: white;
}

.navbar-brand {
  width: 150px;
}

.navbar-nav {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.nav-item {
  font-size: 14px;
  font-weight: 500;
  width: 100px;
  height: 40px;
  text-align: center;
}

.nav-item:first-child {
  border: 1px solid white;
  border-radius: 30px;
  background-color: #1a4a8d;
}
</style>
