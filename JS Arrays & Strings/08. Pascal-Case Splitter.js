function solve(text){
    let regex = /([A-Z][a-z])/g;
    let matches = text.replace(regex, ', $1');
     
    console.log(matches.substring(1).trim());
}

console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'));
console.log(solve('HoldTheDoor'));
console.log(solve('ThisIsSoAnnoyingToDo'));