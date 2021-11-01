# Vue Hotels App

This is a solution to Reengen Full Stack Bootcamp with Vuejs and Nodejs Week-2 Project. It is built with Vuejs by using [Vue CLI](https://cli.vuejs.org/), [Vue Router](https://router.vuejs.org/), [Vuelidate](https://vuelidate.js.org/) and [html2pdf](https://www.npmjs.com/package/html2pdf.js/v/0.9.0).

You can check the [live demo here](http://fozoglu-vue-hotels-app.surge.sh/).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Project Setup](#project-setup)

## Overview

### Homework Requirements

- There will be at least 4 hotels card in the page
- Hotel data should come from a .json file
- Hotel name, price, rating, photo and location should be listed in the card
- There should be a hotels/:id or hotels/:name route for showing hotel detail
- There should be a reservation route for listing forms for each guest
- There should be guest name, last name, age, sex, identitiy no., HES Code, e-mail adress and phone number field in the form
- Form validations must be complete for each field and form (with Vuelidate)
- Validations and Filters should be used from a global mixin
- Next form should be focused when the previous one is completed (by using Vue ref)
- There will be a payment page and a loading modal to show that the payment is successful
- Optionally Added -> List all booking details in payment route
- Optionally Added -> Download booking details in payment route (with html2pdf.js)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for a city to list all available hotels for selected dates
- Enter guest information (for adults and children)
- See hotel prices based on selected dates and number of rooms
- See rating of hotels with stars out of 5
- Select desired hotel to proceed booking process
- See hotel details in a detail page and proceed to reservation route
- See forms for each guest in reservation page with form validations and errors
- Fill the forms for each guest and if there is no errors then proceed to payment route
- See booking information and guest details in the payment route
- (Optional) Download the booking details - via html2pdf.js

### Links

- Solution URL: [Github Link](https://github.com/fatihozoglu/vue-hotels-app)
- Live Site URL: [Vue Hotels App](http://fozoglu-vue-hotels-app.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/)
- [Vuejs](https://vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuelidate] (https://vuelidate.js.org/)
- [html2pdf](https://www.npmjs.com/package/html2pdf.js/v/0.9.0)

## Author

- Website - [Fatih Özoğlu](https://fatihozoglu.github.io/react-portfolio/)
- Linkedin - [Fatih Özoğlu](https://www.linkedin.com/in/fatihozoglu/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
