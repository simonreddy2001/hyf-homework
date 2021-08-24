const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    const query = request.query
    console.log(request.query)
    if (query.maxPrice || query.title || query.createdAfter || query.limit) {
      let updatedMeals = meals.filter(meal => query.maxPrice ? meal.price <= query.maxPrice : true)
        .filter(meal => query.title ? meal.title.toLowerCase().includes(query.title) : true)
        .filter(meal => query.createdAfter ? Date.parse(meal.createdAt) >= Date.parse(query.createdAfter) : true)
      query.limit ? response.send(updatedMeals).slice(0, query.limit) : response.send(updatedMeals);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    if (typeof parseInt(request.params.id) == "number") {
      response.send(meals.filter(meal => meal.id === parseInt(request.params.id)));
    }
  }
  catch (error) {
    throw error;
  }
});

module.exports = router;
