function priceCalculator (type, weight, pricePerKilo){
    let price = weight * pricePerKilo / 1000;
    console.log(`I need $${price.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`);
}

priceCalculator('orange', 2500, 1.80);