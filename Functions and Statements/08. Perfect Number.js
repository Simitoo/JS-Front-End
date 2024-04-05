function aliquotSum(number){
    let sum = 0;

    for(let i = 1; i < number; i++){
        if(number % i == 0 && i !== number){
            sum+=i;
        }
    }

    if(sum === number){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.');
    }
}

console.log(aliquotSum(6));
console.log(aliquotSum(28));
console.log(aliquotSum(1236498));