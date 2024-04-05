function passwordValidaton(password){
    let errorOccurs = 0;

    let validPasswordLength = p => /^.{6,10}$/.test(p);
    let isOnlyLettersAndDigits = p => /^[a-zA-Z0-9]+$/.test(p);
    let haveAtLeast2Digits = p => /^(.*\d){2,}/.test(p);

    if(!validPasswordLength(password)){
        errorOccurs++;
        console.log('Password must be between 6 and 10 characters');
    }

    if(!isOnlyLettersAndDigits(password)){
        errorOccurs++;
        console.log('Password must consist only of letters and digits');
    }

    if(!haveAtLeast2Digits(password)){
        errorOccurs++;
        console.log('Password must have at least 2 digits');
    }

    if(errorOccurs === 0){
        console.log('Password is valid');
    }
}

console.log(passwordValidaton('logIn'));
console.log(passwordValidaton('MyPass123'));
console.log(passwordValidaton('Pa$s$s'));