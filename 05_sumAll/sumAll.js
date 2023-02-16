const sumAll = function(par1 = 1, par2 = 4) {
    let sum = 0;
    for (let i = par1; i <= par2; i++) {
        sum += i
        console.log(i)
    }
    return sum;
};

console.log(sumAll())

// Do not edit below this line
module.exports = sumAll;
