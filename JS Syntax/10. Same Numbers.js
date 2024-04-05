function solve(number){
    let digits = number.toString();
    let areSame = true;

    let refDigit = digits[0];
    let sum = parseInt(refDigit);

    for(let i = 1; i < digits.length; i++){
        if(digits[i] !== refDigit){
            areSame = false;
        }

        sum += parseInt(digits[i]);
    }

    console.log(areSame);
    console.log(sum);
}

console.log(solve(2222222));
console.log(solve(1234));