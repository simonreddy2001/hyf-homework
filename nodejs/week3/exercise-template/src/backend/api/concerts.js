const { response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts").insert(request.body);
    response.send('it added');
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts").where('id', parseInt(request.params.id));
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts").where('id', parseInt(request.params.id)).update(request.body);
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts").where('id', parseInt(request.params.id)).del();
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  const query = request.query
  console.log(request.query)

  if (request.query.maxPrice && isNaN(parseInt(request.query.maxPrice))) {
    const concerts = await knex("concerts").where('price', '<', parseInt(request.query.maxPrice))
    response.json(concerts);
  }
  else if (request.query.title) {
    const concerts = await knex("concerts").where('title', 'like', `%${request.query.title}%`)
    response.json(concerts);
  }
  else if (request.query.createdAfter && isNaN(Date.parse(request.query.createdAfter))) {
    const concerts = await knex("concerts").where('created_date', '>', Date.parse(request.query.createdAfter))
    response.json(concerts);
  }
  else if (request.query.band) {
    const concerts = await knex("concerts").where('band', 'like', `%${request.query.band}%`)
    response.json(concerts);
  }
  else {
    return response.status(404).send("Given query does not find any data")
  }
});

module.exports = router;
