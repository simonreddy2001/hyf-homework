let boughtCandyPrices = [];
let amountToSpend = Math.floor(Math.random() * 100);
function addCandy(candyType, weight){
    switch(candyType) {
        case "sweet":
            boughtCandyPrices.push(weight * 0.5);
            break;
        case "chocolate":
            boughtCandyPrices.push(weight * 0.7);
            break;
        case "toffee":
            boughtCandyPrices.push(weight * 1.1);
            break;
        case "chewing-gum":
            boughtCandyPrices.push(weight * 0.03);
            break;
    }
}

function canBuyMoreCandy() {
    let totalAmount = 0;

    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalAmount += boughtCandyPrices[i];
    }

    if (totalAmount < amountToSpend) {
        console.log(`You bought for ${totalAmount}. You can buy more for ${amountToSpend-totalAmount}... Enjoy!!!`);
    } else {
        console.log(`You already bought for ${totalAmount}. No more candy...`);
    }
}