function solve(number, op1, op2, op3, op4, op5){
    let operations = [op1, op2, op3, op4, op5];
    let digit = parseInt(number);

    for(let i = 0; i < operations.length; i++){
        if(operations[i] === 'chop'){
            digit /= 2;
        }else if(operations[i] === 'dice'){
            digit = Math.sqrt(digit);
        }else if(operations[i] === 'spice'){
            digit += 1;
        }else if(operations[i] === 'bake'){
            digit *= 3;
        }else if(operations[i] === 'fillet'){
            digit -= digit * 0.2;
        }

        console.log(digit);
    }
}

//console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));