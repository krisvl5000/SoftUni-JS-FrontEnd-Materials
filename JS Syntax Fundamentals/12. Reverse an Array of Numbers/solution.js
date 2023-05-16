function arrReverser (n, arr){
    let newArr;

    for (let index = n; index < arr.length; index++) {
        const element = n[index];
        newArr.unshift(element);
    }
    
    console.log(newArr.join(' '));
}