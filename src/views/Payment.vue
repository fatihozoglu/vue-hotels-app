<template>
  <main class="main" ref="content">
    <!-- Modal to show payment status -->
    <div
      v-if="isModalOpen"
      class="
        payment-verification
        d-flex
        flex-column
        justify-content-evenly
        align-items-center
      "
    >
      <div v-if="!success" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-if="!success">Waiting For Payment Verification</div>
      <div
        v-if="success"
        class="d-flex flex-column justify-content-evenly align-items-center"
      >
        <div>
          <i
            style="color: green; font-size: 40px"
            class="fa fa-check-square-o mb-4"
            aria-hidden="true"
          ></i>
        </div>
        <div>Payment is successful</div>
      </div>
    </div>

    <!--When modal is closed, this area shows the booking and guests details-->
    <div v-if="!isModalOpen" class="booking-details">
      <!-- Button for downloading booking and guests detail as PDF (html2pdf.js)-->
      <button class="mb-3" @click="download">
        Download Your Booking Details
      </button>
      <!--Booking confirmation details with hotel and guest info-->
      <h1 class="h3">Booking Confirmation Details</h1>
      <div class="hotel-details mb-3">
        <p class="m-0 mb-1">Hotel Name: {{ selectedHotel.name }}</p>
        <p class="m-0 mb-1">Hotel Adress: {{ selectedHotel.adress }}</p>
        <p class="m-0 mb-1">Check-in Date: {{ guestData.checkinDate }}</p>
        <p class="m-0 mb-1">Check-out Date: {{ guestData.checkoutDate }}</p>
        <p class="m-0 mb-1">
          Guests: {{ guestData.adult }} Adult(s)
          <span v-if="guestData.children !== 0"
            >, {{ guestData.children }} Children</span
          >
        </p>
        <p class="m-0 mb-1">Rooms: {{ guestData.room }} Room(s)</p>
        <p class="m-0 mb-1">Total Price: $ {{ totalPrice }}</p>
      </div>
      <div class="guest-details d-flex gap-5 mb-4">
        <div v-for="(guest, index) in allGuestInfo" :key="index" class="guest">
          <h2 class="h5">Guest {{ index + 1 }}</h2>
          <p class="m-0 mb-1">Name: {{ guest.fname }}</p>
          <p class="m-0 mb-1">Last Name: {{ guest.lname }}</p>
          <p class="m-0 mb-1">Identitiy No.: {{ guest.tc }}</p>
          <p class="m-0 mb-1">
            <span class="me-4">Sex: {{ guest.sex }}</span>
            <span>Age: {{ guest.age }}</span>
          </p>
          <p class="m-0 mb-1">E-mail: {{ guest.email }}</p>
          <p class="m-0 mb-1">Phone: {{ guest.phone }}</p>
          <p class="m-0 mb-1">HES Code: {{ guest.hes }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "Reservation",
  data() {
    return {
      isModalOpen: true,
      success: false,
    };
  },
  props: {
    selectedHotel: Object,
    allGuestInfo: Array,
    guestData: Object,
  },
  methods: {
    closeModal() {
      setTimeout(() => (this.isModalOpen = false), 6000);
      setTimeout(() => (this.success = true), 3000);
    },
    download() {
      html2pdf(this.$refs.content);
    },
  },
  computed: {
    totalPrice() {
      return (
        this.selectedHotel.price * this.guestData.room * this.guestData.days +
        (this.selectedHotel.price * 18) / 100
      );
    },
  },
  mounted() {
    this.closeModal();
    console.log(this.selectedHotel);
  },
};
</script>

<style scoped>
.main {
  display: flex;
  padding: 120px 50px 50px 50px;
  background-color: #f5f5f5;
  min-height: 100vh;
}
.payment-verification {
  width: 40vw;
  height: 30vh;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 600;
}
.booking-details {
  width: 100vw;
  min-height: 100vh;
}
.guest-details {
  flex-wrap: wrap;
}
.guest {
  border: 1px solid rgb(177, 177, 177);
  border-radius: 5px;
  padding: 20px;
}
button {
  width: 100%;
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
