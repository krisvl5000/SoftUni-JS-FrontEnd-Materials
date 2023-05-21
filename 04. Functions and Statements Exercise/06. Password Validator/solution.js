function passwordValidator (pass){
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+&/g.test(pass);
    if (!isValidLength){
        console.log('Password must be between 6 and 10 characters');
    }
}

passwordValidator('somePass');