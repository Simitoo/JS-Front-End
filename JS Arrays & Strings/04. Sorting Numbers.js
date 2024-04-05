function solve(numbers){
    numbers.sort((a, b) => a - b);

    let sortedArray = [];
    let left = 0;
    let right = numbers.length - 1;
    
    while(left <= right){
        sortedArray.push(numbers[left]);
        left++;

        if(left <= right){
            sortedArray.push(numbers[right]);
            right--;
        }
    }

    return sortedArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));