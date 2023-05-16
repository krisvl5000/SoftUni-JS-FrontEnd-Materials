function substringCreator (word, startIndex, endIndex){
    let newWord = word.substring(startIndex, endIndex + 1);
    console.log(newWord);
}

substringCreator('ThisIsATestWord', 4, 10);