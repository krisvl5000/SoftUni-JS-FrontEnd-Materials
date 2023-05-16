function arrReverser (n, arr){
    let newArr = arr.slice(0, n);
    newArr = newArr.reverse();
    console.log(newArr.join(' '));
}