const reverseString = function(string) {
    str_arr = string.split("")
    ans = ""
    for(let i = string.length - 1; i >= 0; i--){
        ans += str_arr[i]
    }
    return ans
};

// Do not edit below this line
module.exports = reverseString;
