const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/calculator/add", (req, res) => {
    const query = req.query
    const keys = Object.values(query)
    const keys2 = keys.map(a => {
        if (Array.isArray(a)) {
            return a.reduce((a, b) => parseInt(a) + parseInt(b))
        }
        return a
    })
    console.log(query)
    console.log(keys2)
    const result = keys2.reduce((a, b) => parseInt(a) + parseInt(b))
    res.send(`Addition of given parameters is ${result}`)
})

app.get("/calculator/multiply", (req, res) => {
    const query = req.query
    const keys = Object.values(query)
    const keys2 = keys.map(a => {
        if (Array.isArray(a)) {
            return a.reduce((a, b) => parseInt(a) * parseInt(b))
        }
        return a
    })
    console.log(query)
    console.log(keys2)
    const result = keys2.reduce((a, b) => parseInt(a) * parseInt(b))
    res.send(`Multiplication of given parameters is ${result}`)
})
app.post("/calculator/subtraction", (req, res) => {
    const query = req.body
    const keys = Object.values(query)
    res.send(`Division of given parameters is ${keys[0] - keys[1]}`)
})
app.post("/calculator/multiply", (req, res) => {
    const query = req.body
    const keys = Object.values(query)

    console.log(query)
    console.log(keys)
    const result = keys.reduce((a, b) => parseInt(a) * parseInt(b))
    res.send(`Multiplication of given parameters is ${result}`)
})
app.post("/calculator/division", (req, res) => {
    const query = req.body
    const keys = Object.values(query)
    res.send(`Division of given parameters is ${keys[0] / keys[1]}`)
})
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
