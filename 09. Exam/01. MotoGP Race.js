function solve (input){
    let args = input;
    let n = Number(args.shift());

    let arr = [];
    let rider = {};

    for (let i = 0; i < n; i++) {
        let element = args.shift();
        let riderArgs = element.split('|');

        let name = riderArgs[0];
        let fuelCapacity = Number(riderArgs[1]);
        let position = Number(riderArgs[2]);

        rider = {name, fuelCapacity, position};
        arr.push(rider);
    }

    while (true) {
        let line = args.shift();
        let cmdArr = line.split(' - ');
        let command = cmdArr[0];

        if (command === 'Finish') {
            break;
        }

        let riderToWorkWith = findRider(cmdArr[1]);

        if (command === 'StopForFuel') {
            let minimumFuel = Number(cmdArr[2]);
            let newPosition = Number(cmdArr[3]);

            if (riderToWorkWith.fuelCapacity < minimumFuel) {
                console.log(`${riderToWorkWith.name} stopped to refuel but lost his position, now he is ${newPosition}.`);

                riderToWorkWith.fuelCapacity = 100;
                riderToWorkWith.position = newPosition;
            } else {
                console.log(`${riderToWorkWith.name} does not need to stop for fuel!`)
            }
        } else if (command === 'Overtaking') {
            let rider2 = findRider(cmdArr[2]);

            if (rider2.position - 1 === riderToWorkWith.position) {
            let temp = riderToWorkWith.position;
            riderToWorkWith.position = rider2.position;
            rider2.position = temp;
            console.log(`${riderToWorkWith.name} overtook ${rider2.name}!`)
            }
            
            
        } else if (command === 'EngineFail') {
            let lapsLeft = Number(cmdArr[2]);

            console.log(`${riderToWorkWith.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);

            let index = arr.findIndex((x) => x.name === riderToWorkWith.name);
            arr.splice(index, 1);
        }
    }

    for (const rider of arr) {
        console.log(rider.name);
        console.log(`  Final position: ${rider.position}`);
    }

    function findRider(name){
        for (const rider of arr) {
            if (rider.name === name) {
                return rider;
            }
        }

        return -1;
    }
}

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);