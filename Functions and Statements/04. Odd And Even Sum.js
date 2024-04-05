function oddAndEvenSum(number){

    determineOddOrEven(number.toString());

    function determineOddOrEven(digits){
        let evenSum = 0;
        let oddSum = 0;

        for(let i = 0; i < digits.length; i++){
            if(digits[i] % 2 == 0){
                //even
                evenSum += parseInt(digits[i]);
            }else{
                //odd
                oddSum += parseInt(digits[i]);
            }
        }

        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));