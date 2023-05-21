function passwordValidator (pass){
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;

    if (!isValidLength){
        console.log('Password must be between 6 and 10 characters');
    }
}