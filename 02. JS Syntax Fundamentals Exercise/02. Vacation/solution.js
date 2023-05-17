function priceCalculator (peopleCount, type, dayOfWeek){
    let price;

    if (dayOfWeek === 'Friday'){
        if (type === 'Students') {
            price = 8.45;
        }
        else if (type === 'Business'){
            price = 10.90;
        }
        else{
            price = 15;
        }
    }
    else if (dayOfWeek === 'Saturday'){
        if (type === 'Students') {
            price = 9.80;
        }
        else if (type === 'Business'){
            price = 15.60;
        }
        else{
            price = 20;
        }
    }
    else {
        if (type === 'Students') {
            price = 10.46;
        }
        else if (type === 'Business'){
            price = 16;
        }
        else{
            price = 22.50;
        }
    }

    let totalPrice = price * peopleCount;

    if (type === 'Students' && peopleCount >= 30) {
        totalPrice -= totalPrice * 15 / 100;
    }

    if (type === 'Business' && peopleCount >= 100) {
        totalPrice -= price * 10;
    }

    if (type === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= totalPrice * 0.1;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

priceCalculator(30, 'Students', 'Sunday');