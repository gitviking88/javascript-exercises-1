const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let result = "";

    for (let i = 0; i < num; i++) {
        result += str;
    }
    return result;
};

const number = Math.floor(Math.random() * 1000);

console.log(repeatString("hey", 3));
console.log(repeatString("hey", 10));
console.log(repeatString("hey", 1));
console.log(repeatString("hey", 0));
console.log(repeatString("hey", -1));
console.log(repeatString("hey", number))


// Do not edit below this line
module.exports = repeatString;
