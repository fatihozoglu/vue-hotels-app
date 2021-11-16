<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <!--Clickable company logo routing to the home page-->
      <router-link class="navbar-brand me-5" :to="{ name: 'Home' }"
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
      <!--Navigation links all routing to the home page-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'Home' }"
              ><i class="fa fa-bed me-2" aria-hidden="true"></i
              >Stays</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              ><i class="fa fa-plane me-2" aria-hidden="true"></i
              >Flights</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              ><i class="fa fa-car me-2" aria-hidden="true"></i>Car
              Rentals</router-link
            >
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
  padding: 20px 50px;
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
  width: 120px;
  height: 40px;
  text-align: center;
}

.nav-item:first-child {
  border: 1px solid white;
  border-radius: 30px;
  background-color: #1a4a8d;
}
</style>
