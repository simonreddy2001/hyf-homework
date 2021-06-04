function min(a,b){
    if(a<b) return a
    else return b
}
console.log(min(2,3));
console.log(min(3,-1));
console.log(min(4,4));




function getCircleArea(radius){
    // return 3.14*radius*radius
}
console.log(getCircleArea(4))

function celciusToFahreneit(c){
    return 1.8*c+32
}
console.log(celciusToFahreneit(30))




const global = 'global';
function scopeTest() {
    const functionScope = 'functionScope';
    console.log(functionScope);
    console.log(global);
    

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable';
    }

    tester();
    console.log(testerVariable);
}

scopeTest();