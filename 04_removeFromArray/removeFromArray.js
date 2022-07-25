const removeFromArray = function(array, ...args) {

    const findAndRemove = function(element){
        if(array.indexOf(element) != -1){
            array.splice(array.indexOf(element),1)
        }
    }

    if (args.length != 1){
        for (const arg of args){
            if (typeof arg != "number"){
                findAndRemove(arg)
                removeFromArray(args, arg)
            }
        }
        for (const arg of args){
            findAndRemove(arg)
        }
        return array
    } 
    else if (args.length == 1){
        findAndRemove(args[0])
        return array
    }

};

// Do not edit below this line
module.exports = removeFromArray;
