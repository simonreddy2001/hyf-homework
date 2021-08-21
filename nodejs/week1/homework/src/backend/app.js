const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

function mealsWithReviews(meals) {
  return meals.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId == meal.id)
    return meal
  });
}

const mealsReviews = mealsWithReviews(meals);
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});


app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews(meals));
});

app.get("/cheap-meals", async (request, response) => {
  response.send(mealsWithReviews(meals).filter(meal => meal.price < 100
  ));
});

app.get("/large-meals", async (request, response) => {
  response.send(mealsWithReviews(meals).filter(meal => meal.maxNumberOfGuests > 5
  ));
});

app.get("/meal", async (request, response) => {
  response.send(mealsReviews[Math.floor(Math.random() * reservations.length)])
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;
