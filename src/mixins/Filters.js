export default {
  //This filter is used to transform prices to locale string with $ sign(example 3457 => $ 3,457)
  filters: {
    dollarSign(value) {
      return `$ ${value.toLocaleString("en-US")}`;
    },
  },
};
