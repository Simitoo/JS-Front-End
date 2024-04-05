function solve(type, weight, price){
    let weightInKilograms = weight / 1000;
    let sum = weightInKilograms * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${type}.`);
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));