function isItaPalindrome (arr){
    for (const num of arr) {
    let numString = String(num);
    let newArr = Array.from(numString);
    let initialElement = newArr;
    let initialElementReversed = initialElement.reverse();

        if (newArr === initialElementReversed) {
            console.log('true');
        }
        else{
            console.log(false);
        }
    }
}

isItaPalindrome([123,323,421,121]);