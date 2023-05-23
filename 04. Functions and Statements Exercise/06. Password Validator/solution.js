function passwordValidator (password){
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+&/g.test(pass);
    const hasAtLeastTwoDigits = (pass) => [...pass.mathAll(/\d/g)].length >= 2;

    let isValid = true;

    if (!isValidLength(password)){
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!hasOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits')
        isValid = false;
    }
    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits')
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('somePass');