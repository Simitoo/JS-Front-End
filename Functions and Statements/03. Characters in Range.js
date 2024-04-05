function charsToASCII(firstChar, secondChar){
    let first = firstChar.charCodeAt(0);
    let second = secondChar.charCodeAt(0);
    let biggestCharCode = findingTheBiggestCharCode(first, second);
    let smallestCharCode = findingTheSmallestCharCode(first, second);
    
    let charsInRange = [];
    let result = '';

    for(let i = smallestCharCode + 1; i < biggestCharCode; i++){
        charsInRange.push(i);
    }

    result = decToChar(charsInRange);

    console.log(result);

    function decToChar(charCodeArray){
        let chars = '';

        for(let el of charCodeArray){
            chars += ` ${String.fromCharCode(el)}`
        }

        return chars.trim();
    }

    function findingTheBiggestCharCode(code1, code2){
        return Math.max(code1, code2);
    }

    function findingTheSmallestCharCode(code1, code2){
        return Math.min(code1,code2);
    }
}

console.log(charsToASCII('a','d'));
console.log(charsToASCII('#',':'));
console.log(charsToASCII('C','#'));