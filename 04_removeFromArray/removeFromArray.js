const removeFromArray = function(mainArr = [1, 2, 3, 4], remover = [3, 2]) {
    let arrayLength = (mainArr.length - 1)
    let removerLength = (remover.length -1)

    for (i = 0; i < arrayLength; i++) {
        let arrObj = mainArr[i];
        for (y = 0; y < removerLength; i++) {
            if (arrObj === remover) {
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