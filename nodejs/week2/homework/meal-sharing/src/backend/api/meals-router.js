const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    const query = request.query
    console.log(request.query)
    if (query.maxPrice) {
      response.send(meals.filter(meal => meal.price <= query.maxPrice)
      );
    }
    else if (query.title) {
      response.send(meals.filter(meal => meal.title.toLowerCase().includes(query.title))
      );
    }
    else if (query.createdAfter) {
      response.send(meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(query.createdAfter))
      );
    }
    else if (query.limit) {
      response.send(meals.slice(0, query.limit));
    }
    else {
      response.send(meals);
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
