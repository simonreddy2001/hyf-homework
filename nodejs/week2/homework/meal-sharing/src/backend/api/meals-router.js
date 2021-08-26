const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/", async (request, response) => {
  console.log(meals);
  console.log("in /api/meals");
  const query = request.query
  console.log(request.query)
  if ((req.query.maxPrice && isNaN(parseInt(req.query.maxPrice))) ||
    (req.query.createdAfter && isNaN(Date.parse(req.query.createdAfter))) ||
    (req.query.limit && isNaN(parseInt(req.query.limit)))
  ) {
    return res.status(400).send("Given parameter is not supported")
  }
  if (query.maxPrice || query.title || query.createdAfter || query.limit) {
    let updatedMeals = meals.filter(meal => query.maxPrice ? meal.price <= query.maxPrice : true)
      .filter(meal => query.title ? meal.title.toLowerCase().includes(query.title) : true)
      .filter(meal => query.createdAfter ? Date.parse(meal.createdAt) >= Date.parse(query.createdAfter) : true)
    if (updatedMeals.length === 0) {
      return res.status(404).send("Given query does not find any data")
    }
    else {
      return query.limit ? response.send(updatedMeals.slice(0, query.limit)) : response.send(updatedMeals);
    }
  }
});

router.get("/:id", async (request, response) => {

  if (typeof parseInt(request.params.id) == "number") {
    const responseData = meals.filter(meal => meal.id === parseInt(request.params.id))
    if (responseData.length === 0) {
      return res.status(404).send("Given query does not find any data")
    }
    else {
      return response.send(responseData);
    }
  }
  else {
    return res.status(400).send("Given parameter is not supported")
  }
});

module.exports = router;
