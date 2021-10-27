import { required, minLength, minValue, email } from "vuelidate/lib/validators";

export const FormValidation = {
  validations: {
    fname: {
      required,
      minLength: minLength(3),
    },
    lname: {
      required,
      minLength: minLength(3),
    },
    age: {
      required,
      minValue: minValue(6),
    },
    email: {
      required,
      email,
    },
  },
};
