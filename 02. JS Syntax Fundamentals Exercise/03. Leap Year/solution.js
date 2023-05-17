function leapYearFinder (num){
    let isLeap;

    if (num % 4 === 0 && num % 100 !== 0) {
        isLeap = true;
    }
    else if (num % 400 === 0){
        isLeap = true;
    }

    if (isLeap) {
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

leapYearFinder(1984);