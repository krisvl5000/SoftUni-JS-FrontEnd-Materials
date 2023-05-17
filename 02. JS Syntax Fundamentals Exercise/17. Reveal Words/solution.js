function revealWords (words, wordsToReveal){
    let arr = words.split(', ');
    let newArr = wordsToReveal.split(' ');

    for (let word of arr) {
        for (let i = 0; i < newArr.length; i++) {
            
            if (word.length === newArr[i].length) {
                newArr[i] = word;
                break;
            }
            
        }
    }

    console.log(newArr.join(' '));
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
);