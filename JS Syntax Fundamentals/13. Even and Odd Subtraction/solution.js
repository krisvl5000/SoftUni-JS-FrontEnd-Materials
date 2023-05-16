function oddAndEvenCalculator (arr){
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element = Number (element);

        if (element % 2 === 0){
            evenSum += element;
        }
        else{
            oddSum += element;
        }
    }

    console.log(evenSum - oddSum);
}