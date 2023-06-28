function solve(input) {
    let map = {};
    
    for (const line of input) {
        let [name, num] = line.split(' ');
        map[name] = num;
    }

    for (const key in map) {
        console.log(`${key} -> ${map[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);