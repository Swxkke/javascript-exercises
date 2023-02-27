const sumAll = function(par1, par2) {
    let sum = 0;
    if (!Number.isInteger(par1) || !Number.isInteger(par2)) {
        sum = "ERROR";
    } else if (par1 > 0 && par2 > 0) {
        if (par1 < par2) {
            for (let i = par1; i <= par2; i++) {
                sum += i;
            }
        } else {
            for (let i = par2; i <= par1; i++) {
                sum += i;
            }
        }
    } else {
        sum = "ERROR";
    }
    return sum;
};

console.log(sumAll())

// Do not edit below this line
module.exports = sumAll;
