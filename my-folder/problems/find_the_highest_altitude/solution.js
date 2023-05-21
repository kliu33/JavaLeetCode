/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let alts = [0]
    let height = 0
    for (let g of gain) {
        height += g
        alts.push(height)
    }
    return Math.max(...alts)
};