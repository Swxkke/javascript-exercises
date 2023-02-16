const removeFromArray = function(mainArr = [1, 2, 3, 4], remover = [3, 2]) {
    let arrayLength = (mainArr.length);


    for (let remObj in remover) {
        remChar = remover[remObj]
        for (i = 0; i < arrayLength; i++) {
            arrObj = mainArr[i];
            if (remChar === arrObj) {
                mainArr.splice(i, 1);
            } else {
                continue;
            }
        }
    }
    return mainArr;
};

console.log(removeFromArray())

// Do not edit below this line
module.exports = removeFromArray;