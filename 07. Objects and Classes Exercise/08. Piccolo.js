function solve(arr) {
    const parkingLot = new Set();
    const parkedCars = new Set();

    for (const entry of arr) {
        const [direction, carNumber] = entry.split(', ').map(item => item.trim());

        if (direction === 'IN') {
            if (!parkedCars.has(carNumber)) {
                parkingLot.add(carNumber);
                parkedCars.add(carNumber);
            }
        } else if (direction === 'OUT') {
            if (parkedCars.has(carNumber)) {
                parkingLot.delete(carNumber);
                parkedCars.delete(carNumber);
            }
        }
    }

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        const sortedCarNumbers = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        console.log(sortedCarNumbers.join('\n'));
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