let variable = 0;

const bt1 = document.getElementById("btn")
const bt2 = document.getElementById("btn2")
const bt3 = document.getElementById("button3")
bt1.addEventListener('click', () => {
    console.log(variable);
    variable++;
})
bt2.addEventListener('click', () => {
    console.log(variable);
    variable++;
})
const fun = () => {
    setTimeout(() => {
        console.log("This text was delayed by 3 seconds");
    }, 3000)
}
bt3.addEventListener('click', fun)

function callback() {
    console.log("DOM fully loaded and parsed")
}
window.addEventListener('DOMContentLoaded', callback());
let xArr = []
let yArr = []
document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let coordinates = "X coordinates is " + x + ", Y coordinates is " + y;
    document.getElementById("mouse").innerHTML = coordinates;
    xArr.push(x);
    yArr.push(y);
});

function avgCoordinates(intArray) {
    function reduceArr() {
        const reduceReturn = intArray.reduce((a, b) => a + b) / intArray.length
        console.log(reduceReturn);
        return reduceReturn;
    }
    return reduceArr;

}
setInterval(avgCoordinates(xArr), 30000)
setInterval(avgCoordinates(yArr), 30000)
clearInterval(avgCoordinates(xArr))
clearInterval(avgCoordinates(yArr))

//Function declaration
function foo() { return 5; }

//Anonymous function expression
var foo = function () { return 5; }

//Named function expression
var foo = function foo() { return 5; }