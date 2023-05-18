function repeatString (stringToRepeat, timesToRepeat){
    let result = stringToRepeat;

    for (let i = 0; i < timesToRepeat; i++) {
        result += stringToRepeat;
    }

    return result;
}

repeatString('abc', 3);