function solve(year){
    if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
        console.log('yes');
    } else {
        console.log('no');
    }
}

console.log(solve(1984));
console.log(solve(2003));
console.log(solve(4));