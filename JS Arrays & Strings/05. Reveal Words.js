function solve(word, text){
    let replacement = word.split(', ');
    let regex = /\*+/g;

    let replacedText = text.replace(regex, function(match){
        let matchingWord = replacement.find(w => w.length === match.length);

        return matchingWord;
    });

    return replacedText;
}

//console.log(solve('great','softuni is ***** place for learning new programming languages'));
console.log(solve('great, learning','softuni is ***** place for ******** new programming languages'));