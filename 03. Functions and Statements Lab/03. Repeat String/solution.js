function repeatString (stringToRepeat, timesToRepeat){
    let result;

    for (let i = 0; i <= timesToRepeat; i++) {
        result += stringToRepeat;
    }

    return stringToRepeat;
}

repeatString('abc', 3);