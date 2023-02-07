const string = ""

const reverseString = function(string) {
    const stringLength = (string.length - 1)
    let newString = "";
    for (let i = stringLength; i >= 0; i--) {
        lastChar = string.substr(i, 1)
        newString += lastChar
    }
    return newString;
}


reverseString()