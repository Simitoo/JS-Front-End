function solve(number){
    let sum = 0;
    let digit = number.toString();

    for(let i=0; i < digit.length; i++){
        sum += parseInt(digit[i]);
    }

    console.log(sum);
}

console.log(solve(245678));
console.log(solve(97561));
console.log(solve(543));