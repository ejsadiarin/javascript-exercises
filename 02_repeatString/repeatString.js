const repeatString = function(word, repeatNumber) {

    if (repeatNumber < 0) return "ERROR";
    if (word === "") return "";
    
    let result = "";
    for (let i = 0; i < repeatNumber; i++) {
        result =  result + word;
    }
    return result;

    // optimized solution with .repeat() string method
    // const result = word.repeat(repeatNumber);
    // return result;
};
// console.log(repeatString('hey', 4));

// Do not edit below this line
module.exports = repeatString;
