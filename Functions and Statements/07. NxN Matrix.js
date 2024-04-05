function nxnMatrix(number){
    const symbol = `${number} `;

    for(let i = 0; i < number; i++){
        console.log(symbol.repeat(number).trim());
    }
}

console.log(nxnMatrix(3));
console.log(nxnMatrix(7));