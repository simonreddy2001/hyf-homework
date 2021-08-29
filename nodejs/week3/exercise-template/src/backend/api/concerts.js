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
  if ((req.query.maxPrice && isNaN(parseInt(req.query.maxPrice))) ||
    (req.query.createdAfter && isNaN(Date.parse(req.query.createdAfter)))
  ) {
    return res.status(400).send("Given parameter is not supported")
  }
  if (query.maxPrice || query.title || query.createdAfter || query.band) {
    let updatedConcerts = await (query.maxPrice ? knex("concerts").where('price', '>', query.maxPrice) : true)
      .where(concert => query.title ? concert.title.toLowerCase().includes(query.title) : true)
      .where(concert => query.createdAfter ? Date.parse(concert.createdAt) >= Date.parse(query.createdAfter) : true)
      .where(concert => query.band ? concert.band.toLowerCase().includes(query.band) : true)
    if (updatedConcerts.length === 0) {
      return res.status(404).send("Given query does not find any data")
    }
    else {
      return response.send(updatedconcerts);
    }
  }
});
module.exports = router;
