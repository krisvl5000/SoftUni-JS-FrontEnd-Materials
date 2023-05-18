function simpleCalculator (num1, num2, operation){
    let result = 0;

    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;

    // switch (operation) {
    //     case 'add':
    //         return add(num1, num2);
    //     case 'subtract':
    //         return subtract(num1, num2);   
    //     case 'multiply':
    //         return multiply(num1, num2);
    //     case 'divide':
    //         return divide(num1, num2); 
    // }

    // There is also a way to do this without if or switch - we can
    // define a map, which will contain all anonymous functions, and
    // call the one that has the same name with the key 
    //(the name of the operation).

    const operationMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }

    return operationMap[operation](num1, num2);
}

console.log(simpleCalculator(5, 5, 'multiply'));