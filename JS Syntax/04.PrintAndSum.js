function solve(start, end){
    let nums = '';
    let sum = 0;

    for(let i = start; i <= end; i++){
        nums += i + ' ';
        sum += i;
    }

    console.log(nums);
    console.log(`Sum: ${sum}`);
}

console.log(solve(5, 10));
console.log(solve(0, 26));