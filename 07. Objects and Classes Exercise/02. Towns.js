function solve(input){
    const arr = new Array();

    for (const townArgs of input) {
        const [name, long, lat] = townArgs.split(' | ');
        const town = {town: name, latitude: Number(long).toFixed(2), longitude: Number(lat).toFixed(2)};
        arr.push(town);
    }

    for (const town of arr) {
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);