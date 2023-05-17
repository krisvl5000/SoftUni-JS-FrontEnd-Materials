function nPrinter (arr, n){
    counter = 0;
    let newArr = new Array;

    for (const element of arr) {

        if (counter === 0) {
            newArr.push(element);
        }

        counter++;

        if (counter === n){
            counter = 0;
        }
    }
    
    console.log(newArr);
}

nPrinter(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);