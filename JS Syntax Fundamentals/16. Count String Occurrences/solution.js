function occurrenceCounter (text, word){
    let counter = 0;

    let words = text.split(' ');

    for (const textWord of words) {
        if (textWord === word) {
            counter++;
        }
    }

    console.log(counter);
}

occurrenceCounter('Lets see how many time the word the is contained in the sentence', 'the');
