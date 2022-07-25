const repeatString = function(string, num) {
    temp = ""
    if (num < 0) {
        return "ERROR"
    }

    for (let i = 0; i < num; i++){
        temp += string
    }
    
    return temp
};

// Do not edit below this line
module.exports = repeatString;
