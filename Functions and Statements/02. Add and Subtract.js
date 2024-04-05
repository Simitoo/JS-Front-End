function sum(firstNum, secondNum, thirdNum){
    let sumOfTwo = firstNum + secondNum;
    let finalResult = subtract(sumOfTwo, thirdNum);

    console.log(finalResult);

    function subtract(sum, thirdNum){
        return sum - thirdNum;
    }
}



console.log(sum(23,6,10));
console.log(sum(1,17,30));
console.log(sum(42,58,100));