function solve(speed, area){
    let speedLimit = 0;
    let speedDiff = 0;
    let status = '';

    if(area === 'motorway'){
        speedLimit = 130;
    }else if(area === 'interstate'){
        speedLimit = 90;
    }else if(area === 'city'){
        speedLimit = 50;
    }else if(area === 'residential'){
        speedLimit = 20;
    }

    if(speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        speedDiff = speed - speedLimit;
        if(speedDiff <= 20){
            status = 'speeding';
        }else if(speedDiff <= 40){
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));