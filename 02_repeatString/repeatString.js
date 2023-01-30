const string = ""
const num = ""

const repeatString = function(string, num) {
    let repeater = string
    if (num === 0) {
        repeater = ""
    } else if (num < 0) {
        repeater = "ERROR"
    } else {
        for (i = 1; i < num; i++) {
            repeater += `${string}`
        }
    }
    return repeater;
}

// Do not edit below this line
module.exports = repeatString;
