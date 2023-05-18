function posOrNegChecker (...params){
    let counter = 0;

    for (const num of params) {
        if (num < 0) {
            counter++;
        }
    }

    if (counter % 2 === 0) {
        return 'Positive';
    }
    else{
        return 'Negative';
    }
}

console.log(posOrNegChecker(1, 2, 3));