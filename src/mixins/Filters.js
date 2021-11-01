export default {
  filters: {
    dollarSign(value) {
      return `$ ${value.toLocaleString("en-US")}`;
    },
  },
};
