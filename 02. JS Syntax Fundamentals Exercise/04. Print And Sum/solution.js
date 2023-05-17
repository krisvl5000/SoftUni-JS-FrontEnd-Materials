function sumPrinter (num1, num2){
    let totalSum = 0;
    let nums = '';
    for (let index = num1; index <= num2; index++) {
        nums += index + ' ';
        totalSum += index;
    }

    console.log(nums);
    console.log(`Sum: ${totalSum}`);
}

sumPrinter(5, 10);