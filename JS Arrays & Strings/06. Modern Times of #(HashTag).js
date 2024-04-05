function solve(text){
    let regex = /#[a-zA-Z]+/g;
    let matches = text.match(regex);

    matches = matches.map(match => match.replace('#', ''));
    for(let w of matches){
        console.log(w);
    }
}

console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(solve('The symbol # is known #variously in English-speaking #regions as the #number sign'));