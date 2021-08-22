const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        console.log(reviews);
        console.log("in /api/reviews");
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});
router.get("/:id", async (request, response) => {
    try {
        if (typeof parseInt(request.params.id) == "number") {
            response.send(reviews.filter(review => review.id === parseInt(request.params.id)));
        }
    }
    catch (error) {
        throw error;
    }
});
module.exports = router;