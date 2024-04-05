function solve(names){
    names.sort((a, b) => a.localeCompare(b)).forEach((n, index) => console.log(`${index+1}.${n}`));     
};

console.log(solve(["John", "Bob", "Christina", "Ema"]));