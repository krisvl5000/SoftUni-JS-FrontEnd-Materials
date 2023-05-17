function cooking (num, ...elems){
    num = Number(num);

    let arr = elems;

    for (const command of arr) {
        if (command === 'chop') {
            num /= 2;
        }
        else if (command === 'dice'){
            num = Math.sqrt(num);
        }
        else if (command === 'spice'){
            num++;
        }
        else if (command === 'bake'){
            num *= 3;
        }
        else if (command === 'fillet'){
            num -= num * 0.2;
        }

        console.log(num);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');