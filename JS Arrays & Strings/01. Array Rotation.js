function solve(array, numOfRotations){
    for(let i = 0; i < numOfRotations; i++){
    let firstElement = array.shift();
    array.push(firstElement);
    }

    console.log(array.join(' '));
}

//console.log(solve([51, 47, 32, 61, 21], 2));
console.log(solve([32, 21, 61, 1], 4));