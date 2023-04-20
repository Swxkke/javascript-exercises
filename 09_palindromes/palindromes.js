const palindromes = function (input) {
    let lowerCase = input.toLowerCase();
    let filtered = lowerCase.replace(/[^\w]/g, "");
    let reversed = "";
    for (let i = filtered.length - 1; i >=0; i--) {
        reversed += filtered[i];
    }
    
    if (reversed === filtered) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
