function passwordValidator (pass){
    let isValid = true;

    if (pass.length < 6 && pass.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters')
    }
    
    let arr = pass.split('');

    for (const char of arr) {
        
    }
}