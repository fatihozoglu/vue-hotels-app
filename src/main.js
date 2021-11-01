import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";
import html2pdf from "html2pdf.js";

Vue.use(Vuelidate);
Vue.use(html2pdf);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
