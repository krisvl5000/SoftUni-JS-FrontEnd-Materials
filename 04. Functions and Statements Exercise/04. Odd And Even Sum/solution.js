function oddAndEvenSum (num){
    let oddSum = 0;
    let evenSum = 0;

    let numString = String(num);
    let arr = Array.from(numString);

    for (const item of arr) {
        let newItem = (Number(item));

        if (newItem % 2 === 0){
            evenSum += newItem;
        }
        else{
            oddSum += newItem;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));