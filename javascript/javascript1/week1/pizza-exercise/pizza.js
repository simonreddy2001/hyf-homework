//- If a user has 0 or less balance log out 'Please deposit some money!'
//- If a user has more than 0 and at most 1000 log out 'Your balance is looking okay'
//- If a user has more than 1000 and at most 3000 log out 'Your balance is looking good'
//- If a user has more than 3000 and at most 10000 log out 'Your balance is fantastic'
//- If a user has more than 10000 log out 'Your balance is AMAZING!'

const balance = 100001;
if (balance <= 0){
    console.log('Please deposit some money!')
}
else if (balance<=1000){
    console.log('Your balance is looking okay')
}
else if (balance <= 3000){
    console.log('Your balance is looking good')
}
else if (balance <= 10000){
    console.log('Your balance is fantastic')
}
else {
    console.log('Your balance is AMAZING!')
}



let a=2
let b=1
const result = a + b < 4 ? 'Below' : 'Over'
console.log(result)

function min(a,b){
    if(a<b) return a
    else return b
}
min(1,2);
min(2, -1);
min(1,1);

function getCircleArea(radius){
    return 3.14*radius*radius
}
function celciusToFahreneit(celcius){
    return 1.8*celcius+32
}