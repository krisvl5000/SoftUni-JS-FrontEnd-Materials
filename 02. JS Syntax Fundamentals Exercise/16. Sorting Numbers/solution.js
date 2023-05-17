function sortNumbers (arr){
    arr = arr.sort();
    let length = arr.length;

    let newArr = new Array;

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
        newArr.push(arr.shift());
        }
        else{
            newArr.push(arr.pop());
        }
    }

    return newArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);