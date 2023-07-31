function solve(input) {

    const cars = [];

    for (const kvp of input) {
        const [command, number] = kvp.split(', ');

        if (command === 'IN'){
            cars.push(number);
        } else {
            cars.pop(number);
        }
    }

    if (cars.length === 0){
        console.log('Parking Lot is Empty');
    } else {
        for (const car of cars.sort((a, b) => a.substring(4, 6) - b.substring(4, 6))) {
            console.log(car);
        }
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);