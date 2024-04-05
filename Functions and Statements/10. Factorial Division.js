function factorialDivision(firstInt, secondInt){
    let factorialOfFirst = findingFactorial(firstInt);
    let factorialOfSecond = findingFactorial(secondInt);

    let divideResult = factorialOfFirst / factorialOfSecond;

    console.log(divideResult.toFixed(2));

    function findingFactorial(num){
        if(num === 0){
            return 1;
        }else{
            return num * findingFactorial(num - 1);
        }
    }
}

console.log(factorialDivision(5,2));
console.log(factorialDivision(6,2));
