<template>
  <div class="testbox">
    <form>
      <fieldset>
        <legend class="rounded">Guest - {{ num }}</legend>
        <div class="columns">
          <div class="item">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.fname.$error }"
            ></div>
            <label class="form__label" for="fname"
              >First Name<span>*</span></label
            >
            <input
              class="form__input"
              v-model.trim="$v.fname.$model"
              id="fname"
              type="text"
              name="fname"
            />
            <div class="error" v-if="!$v.fname.required && $v.fname.$dirty">
              Name is required
            </div>
            <div class="error" v-if="!$v.fname.minLength">
              Name must have at least
              {{ $v.fname.$params.minLength.min }} letters.
            </div>
          </div>
          <div class="item">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.lname.$error }"
            ></div>
            <label class="form__label" for="lname">
              Last Name<span>*</span></label
            >
            <input
              class="form__input"
              v-model.trim="$v.lname.$model"
              id="lname"
              type="text"
              name="lname"
            />
            <div class="error" v-if="!$v.lname.required && $v.lname.$dirty">
              Last name is required
            </div>
            <div class="error" v-if="!$v.lname.minLength">
              Name must have at least
              {{ $v.lname.$params.minLength.min }} letters.
            </div>
          </div>
          <div class="item">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.age.$error }"
            >
              <label class="form__label" for="age">Age<span>*</span></label>
              <input
                class="form__input"
                id="age"
                type="number"
                name="age"
                v-model.trim="$v.age.$model"
              />
            </div>
            <div class="error" v-if="!$v.age.required && $v.age.$dirty">
              Age is required
            </div>
            <div class="error" v-if="!$v.age.minValue">
              Must be older than {{ $v.age.$params.minValue.min }}
            </div>
          </div>
          <div class="item">
            <label class="d-block mb-1" for="sex">Sex</label>
            <select name="sex" id="sex">
              <option value="" disabled selected>Select Your Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="item">
            <label for="tc">Identity No.<span>*</span></label>
            <input id="tc" type="text" name="tc" />
          </div>
          <div class="item">
            <label for="hes">HES Code<span>*</span></label>
            <input id="hes" type="text" name="hes" />
          </div>
          <div class="item">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            ></div>
            <label class="form__label" for="email"
              >Email Address<span>*</span></label
            >
            <input
              class="form__input"
              v-model.trim="$v.email.$model"
              id="email"
              type="email"
              name="email"
            />
            <div class="error" v-if="!$v.email.required && $v.email.$dirty">
              Email is required
            </div>
            <div class="error" v-if="!$v.email.email">
              Please enter a valid e-mail adress
            </div>
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel" name="phone" />
          </div>
        </div>
      </fieldset>
      <br />
    </form>
  </div>
</template>

<script>
import { FormValidation } from "../mixins/FormValidation";

export default {
  name: "ResForm",
  mixins: [FormValidation],
  data() {
    return {
      fname: "",
      lname: "",
      age: "",
      email: "",
    };
  },
  props: {
    num: Number,
  },
};
</script>

<style scoped>
div,
form,
input,
select,
textarea,
label {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  position: absolute;
  margin: 0;
  font-size: 50px;
  color: #fff;
  z-index: 2;
  line-height: 83px;
}
legend {
  padding: 10px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #1a4a8d;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
}
form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 8px #1a4a8d;
}
input,
select,
textarea {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
input[type="date"] {
  padding: 4px 5px;
}
textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
select {
  height: 30px;
}
.item:hover p,
.item:hover i,
.item input:hover,
.item select:hover,
.item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 3px 0 #1a4a8d;
  color: #1a4a8d;
}
.item {
  position: relative;
  margin: 10px 0;
}
.item span {
  color: red;
}
.item i {
  right: 1%;
  top: 30px;
  z-index: 1;
}
.columns {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.columns div {
  width: 48%;
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
.error {
  color: red;
}
@media (min-width: 568px) {
  .name-item,
  .city-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input,
  .name-item div {
    width: calc(50% - 20px);
  }
  .name-item div input {
    width: 97%;
  }
  .name-item div label {
    display: block;
    padding-bottom: 5px;
  }
}
</style>
