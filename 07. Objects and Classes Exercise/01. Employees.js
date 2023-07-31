function solve(input) {
    const peopleArr = new Array();

    for (const name of input) {
        let person;

        const personalNum = name.length;
        
        peopleArr.push(person = {name: name, personalId: personalNum});
    }

    for (const person of peopleArr) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalId}`);

    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);