function solve(word, text){
    let wordsInText = text.split(' ');

    for(let w of wordsInText){
        if(w.toLowerCase() === word.toLowerCase()){
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}

console.log(solve('javascript','is the best programming JavaScript language'));
console.log(solve('python','JavaScript is the best programming language'));