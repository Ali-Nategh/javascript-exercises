const sumAll = function(...numbers) {
    for (const num of numbers){
        if (typeof num != "number" || num < 0){
            return "ERROR";
        }
    }

    if (numbers[0] > numbers[1]){
        let temp = numbers[0];
        numbers[0] = numbers[1];
        numbers[1] = temp;
    }

    let sum = 0;
    for (let i = numbers[0]; i <= numbers[1]; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
