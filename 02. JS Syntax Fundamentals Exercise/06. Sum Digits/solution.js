function sum (num){
    let arr = String(num).split('').map(str => Number(str));
    let totalSum = 0;

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let numberToAdd = Number (element);
        totalSum += numberToAdd;
    }

    console.log(totalSum);
}

sum(245678);