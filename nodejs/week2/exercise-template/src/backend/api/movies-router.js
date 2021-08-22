'use strict'
const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(request.isChromeBrowser)
  //return response.send(request.isChromeBrowser)
  //console.log(movies);
  const query = request.query
  console.log(request.query)

  if (query.beginYear && query.endYear && query.minRating) {
    response.send({
      data:
        [movies.filter(movie => movie.year >= query.beginYear && movie.year <= query.endYear && movie.rating >= query.minRating)]
    });
  }
  else if (query.beginYear && query.endYear) {
    response.send({
      data:
        [movies.filter(movie => movie.year >= query.beginYear && movie.year <= query.endYear)]
    });
  }
  else {
    response.send({ data: [movies] });
  }
});

router.get("/:id", async (request, response) => {
  response.send({
    data:
      [movies.filter(movie => movie.id == request.params.id)]
  });
});




module.exports = router;
