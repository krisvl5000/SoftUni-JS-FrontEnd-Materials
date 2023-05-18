function formatGrade  (grade){
    let eval;

    if (grade < 3.00) {
        eval = 'Fail';
    }
    else if (grade >= 3.00 && grade < 3.50){
        eval = 'Poor';
    }
    else if (grade >= 3.50 && grade < 4.50){
        eval = 'Good';
    }
    else if (grade >= 4.50 && grade < 5.50){
        eval = 'Very Good';
    }
    else{
        eval = 'Excellent'
    }

    if (grade % 1 === 0){
        console.log(`${eval} (${grade})`);
    }
    else{
        console.log(`${eval} (${grade.toFixed(2)})`);
    }
}

formatGrade(4.50);