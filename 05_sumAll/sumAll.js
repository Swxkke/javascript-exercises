const sumAll = function(par1 = 5,4, par2 = 1) {
    let sum = 0;
    if (par1 < par2) {
        for (let i = par1; i <= par2; i++) {
            sum += i;
        }
    } else {
        for (let i = par2; i <= par1; i++) {
            sum += i;
        }
    }
    if (sum === NaN || sum === undefined || sum <= 0) {
        sum = "ERROR";
    }
    return sum;
};

console.log(sumAll())

// Do not edit below this line
module.exports = sumAll;
