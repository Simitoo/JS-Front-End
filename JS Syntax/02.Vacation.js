function solve(countOfPeople, type, day){
    let totalPrice = 0;
    let singlePersonPrice = 0;

    if(day == 'Friday' && type == 'Students'){
        singlePersonPrice = 8.45;
    }else if(day == 'Saturday' && type == 'Students'){
        singlePersonPrice = 9.8;
    }else if(day == 'Sunday' && type == 'Students'){
        singlePersonPrice = 10.46;
    }else if(day == 'Friday' && type == 'Business'){
        singlePersonPrice = 10.9;
    }else if(day == 'Saturday' && type == 'Business'){
        singlePersonPrice = 15.6;
    }else if(day == 'Sunday' && type == 'Business'){
        singlePersonPrice = 16;
    }else if(day == 'Friday' && type == 'Regular'){
        singlePersonPrice = 15;
    }else if(day == 'Saturday' && type == 'Regular'){
        singlePersonPrice = 20;
    }else if(day == 'Sunday' && type == 'Regular'){
        singlePersonPrice = 22.5;
    }

    //singlePersonPrice = pricePerDay(day, type);
    totalPrice = countOfPeople * singlePersonPrice;

    if(type == 'Students' && countOfPeople >= 30){
        totalPrice -= totalPrice * 0.15;
    } else if (type == 'Business' && countOfPeople >= 100){
        totalPrice -= singlePersonPrice * 10;
    } else if (type == 'Regular' && countOfPeople >= 10 && countOfPeople <= 20){
        totalPrice -= totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

console.log(solve(30,'Students','Sunday'));
console.log(solve(40,'Regular','Saturday'));