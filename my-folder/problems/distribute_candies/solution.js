/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let count = candyType.length/2
    let set = new Set
    for (let candy of candyType) {
        set.add(candy)
    }
    return Math.min(count, Array.from(set).length)
};