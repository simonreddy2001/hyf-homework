const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        console.log(reservations);
        console.log("in /api/reservations");
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});
router.get("/:id", async (request, response) => {
    try {
        if (typeof parseInt(request.params.id) == "number") {
            response.send(reservations.filter(reservation => reservation.id === parseInt(request.params.id)));
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;