function sameNumbers (num){
    let totalSum = 0;
    let arr = String(num).split('').map(x => Number(x));
    let isSame = true;
    let firstNum = arr[0];

    for (const number of arr) {
        if (number !== firstNum) {
            isSame = false;
        }

        totalSum += number;
    }

    console.log(isSame);
    console.log(totalSum);
}

sameNumbers(11111);