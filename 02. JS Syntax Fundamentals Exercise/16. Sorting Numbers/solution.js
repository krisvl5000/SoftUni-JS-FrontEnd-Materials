function sortNumbers (arr){
    arr.sort();

    let newArr = new Array;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        
        if (i % 2 === 0) {
           newArr.unshift(item); 
        }
        else{
            newArr.push(item);
        }
    }

    return newArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);