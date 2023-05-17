function arrayRotator (arr, num){
    for (let i = 0; i < num; i++) {
        let itemToPush = arr.shift(arr[0]);
        arr.push(itemToPush);
    }

    console.log(arr.join(' '));
}

arrayRotator([51, 47, 32, 61, 21], 2);