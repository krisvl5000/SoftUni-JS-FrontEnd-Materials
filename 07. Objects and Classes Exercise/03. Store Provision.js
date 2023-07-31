function updateStockAndPrint(storeStock, deliveryProducts) {
    const stock = {};

    for (let i = 0; i < storeStock.length; i += 2) {
        const product = storeStock[i];
        const quantity = parseInt(storeStock[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let i = 0; i < deliveryProducts.length; i += 2) {
        const product = deliveryProducts[i];
        const quantity = parseInt(deliveryProducts[i + 1]);

        stock[product] = (stock[product] || 0) + quantity;
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ], 
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14',
        'Water', '4', 'Juice', '5'
        ],
        [
        'Sugar', '44', 'Oil', '12', 'Apple', '7',
        'Tomatoes', '7', 'Bananas', '30'
        ]);