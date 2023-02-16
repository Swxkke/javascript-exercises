const removeFromArray = function(mainArr = [1, 2, 3, 4], remover = [2,3]) {
    let arrayLength = (mainArr.length)
    let removerLength = (remover.length -1)


    for (i = 0; i < arrayLength; i++) {
        let arrObj = mainArr[i];
        if (arrObj === remover) {
            mainArr.splice(i, 1);
            console.log(i)
        } else {
            console.log(i)
            continue;
        }
    }
    return mainArr;
};

console.log(removeFromArray())

// Do not edit below this line
//module.exports = removeFromArray;