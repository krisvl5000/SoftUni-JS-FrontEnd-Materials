function addAndSubtract (num1, num2, num3){
    const sum = (num1, num2) => num1 + num2;
    let sumResult = sum(num1, num2);
    const subtract = (sumResult, num3) => sumResult - num3;
    let finalResult = subtract(sumResult, num3);

    return finalResult;
}

console.log(addAndSubtract(23, 6, 10));