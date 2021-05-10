let deep = prompt('enter the deep/length value in meters')
let height = prompt('enter the height value in meters')
let width = prompt('enter the width value in meters')
let gardenSizeInM2 = prompt('enter the garden size in m2')
let purchasingPrice = prompt('enter the purchased value of house')
let volumeInMeters = deep*height*width
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
priceDiff = housePrice-purchasingPrice
if(priceDiff<0){ 
    console.log(`Hmmm!!! You are paying too much for its price, which is ${Math.abs(priceDiff)}`)
}
else if(priceDiff>0) {
    console.log(`Lucky!!! You are paying too little for its price, you are saving ${priceDiff}`)
}
else{
    console.log(`Nice!!! You are paying exact amount of the house`)
}
