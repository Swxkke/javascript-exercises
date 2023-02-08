const removeFromArray = function() {
    const mainArr = [1, 2, 3, 4];
    const deleter = 4;
    let delIndex = mainArr.indexOf(deleter);

    console.log(delIndex)
};

console.log(removeFromArray())

// Do not edit below this line
module.exports = removeFromArray;

if (mainArr === deleter) {
    let delIndex = mainArr.indexOf(deleter);
    if (delIndex > -1) {
        mainArr.splice(delIndex, 1)
    }
}