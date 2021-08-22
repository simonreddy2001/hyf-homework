const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    const queryParams = req.query
    res.send(`Addition of given numbers is ${parseInt(queryParams.first) + parseInt(queryParams.second)}`);
})
app.get("/numbers/multiply", (req, res) => {
    const queryParams = req.query
    console.log(queryParams)
    res.send(`Multiplication of given numbers is ${parseInt(queryParams.first) * parseInt(queryParams.second)
        }`
    );
})

app.listen(3000, () => console.log(`Calculator: listening on port 3000`));
