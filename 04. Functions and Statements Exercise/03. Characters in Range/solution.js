function charPrinter (char1, char2){
    let startIndex = Number(char1);
    let endIndex = Number(char2);

    let result = '';

    for (let i = startIndex + 1; i < endIndex - 1; i++) {
        result += i;
    }

    console.log(result);
}

charPrinter('a', 'b');