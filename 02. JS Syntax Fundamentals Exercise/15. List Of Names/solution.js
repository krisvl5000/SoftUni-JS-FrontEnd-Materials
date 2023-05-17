function arraySorter (arr){
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        console.log(`${i + 1}.${item}`)
    }
}

arraySorter(["John", "Bob", "Christina", "Ema"]);