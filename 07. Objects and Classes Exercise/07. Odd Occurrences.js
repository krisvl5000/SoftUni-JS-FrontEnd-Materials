function solve(input){
    const arr = input.split(' ');
    
    const wordsCount = {};

    for (const word of arr) {
        wordsCount[word.toLowerCase()] = 0;
    }

    for (const word of arr) {
        if (wordsCount.hasOwnProperty(word.toLowerCase())) {
            wordsCount[word.toLowerCase()]++;
        }    
    }

    for (const[key, value] of Object.entries(wordsCount)) {
        if (value % 2 === 1) {
            console.log(key.toLowerCase());
        }
    }
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');