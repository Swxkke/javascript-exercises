const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS";
    } else if (+input === 1) {
        return 1;
    } else {
        let prev1 = 0;
        let prev2 = 1;
        let current = 0;
        for (let i = 2; i <= input; i++) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current
        }
        return current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
