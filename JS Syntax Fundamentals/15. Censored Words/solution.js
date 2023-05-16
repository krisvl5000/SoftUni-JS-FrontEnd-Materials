function replaceWords (text, word){
    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word));
    }

    function repeat (word){
        let censoredWord = '';
    
        for (let index = 0; index < word.length; index++) {
            const element = word[index];
            censoredWord += '*';
        }
    
        return censoredWord;
    }

    console.log(censored);
}

replaceWords('Some text to check if the program works and if it will replace the word if.', 'if');

