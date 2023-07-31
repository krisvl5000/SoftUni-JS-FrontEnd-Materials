function solve(input){
    const wordsToLookFor = input.shift();
    const wordsArr = wordsToLookFor.split(' ');

    const wordsCount = {};

    for (const word of wordsArr) {
        wordsCount[word] = 0;
    }

    for (const word of input) {
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++;
        }    
    }

    const sortedWordsCount = Object.fromEntries
    (Object.entries(wordsCount).sort((a, b) => b[1] - a[1]));
    
    for (const[key, value] of Object.entries(wordsCount)) {
        console.log(`${key} - ${value}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);