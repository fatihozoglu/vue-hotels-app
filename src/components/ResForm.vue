<template>
  <div class="testbox">
    <form>
      <fieldset>
        <legend class="rounded">Guest - {{ num }}</legend>
        <div class="columns">
          <div class="item">
            <label for="fname">First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" />
          </div>
          <div class="item">
            <label for="lname"> Last Name<span>*</span></label>
            <input id="lname" type="text" name="lname" />
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
            <label for="eaddress">Email Address<span>*</span></label>
            <input id="eaddress" type="text" name="eaddress" />
          </div>
          <div class="item">
            <label for="phone">Phone<span>*</span></label>
            <input id="phone" type="tel" name="phone" />
          </div>
          <div class="item">
            <label for="age">Age<span>*</span></label>
            <input id="age" type="number" name="age" />
          </div>
          <div class="item">
            <label for="sex">Sex<span>*</span></label>
            <input id="sex" type="text" name="sex" />
          </div>
        </div>
      </fieldset>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "ResForm",
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
.item:hover p,
.item:hover i,
.item input:hover,
.item select:hover,
.item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 3px 0 #1a4a8d;
  color: #006622;
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
input[type="radio"],
input[type="checkbox"] {
  display: none;
}
label.radio {
  position: relative;
  display: inline-block;
  margin: 5px 20px 15px 0;
  cursor: pointer;
}
label.radio:before {
  content: "";
  position: absolute;
  left: 0;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
input[type="radio"]:checked + label:before,
label.radio:hover:before {
  border: 2px solid #006622;
}
label.radio:after {
  content: "";
  position: absolute;
  top: 6px;
  left: 5px;
  width: 8px;
  height: 4px;
  border: 3px solid #006622;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  opacity: 0;
}
input[type="radio"]:checked + label:after {
  opacity: 1;
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
