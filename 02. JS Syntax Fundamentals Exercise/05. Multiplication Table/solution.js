function tablePrinter (num){
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} X ${index} = ${num * index}`);
    }
}

tablePrinter(5);