function palindromeInts(integers){

    for(let i = 0; i < integers.length; i++){      
        let isPalindrome = palindromeDeterminer(integers[i].toString());
    
        console.log(isPalindrome);
    }  
    
    function palindromeDeterminer(currEl){
        let elementLastIndex = currEl.length - 1;

        for(let indexOfCurr = 0; indexOfCurr < currEl.length; indexOfCurr ++){
            let firstDigitOfCurr = parseInt(currEl[indexOfCurr]);
            let lastIndexOfCurr = parseInt(currEl[elementLastIndex]);

            if(firstDigitOfCurr === lastIndexOfCurr){
                elementLastIndex --;
            }else{
                return false;
            }              
        }

        return true;
    }
}

console.log(palindromeInts([123,323,421,121]));
console.log(palindromeInts([32,2,232,1010]));