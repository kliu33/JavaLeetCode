/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */

var to_binary_and_count = function(num) {
    let out = []
    while (num > 0) {
        if (num % 2 === 0) {
            out.push(0)
        } else {
            out.push(1)
        }
        num = Math.floor(num / 2)
    }
    return out.filter(ele => ele === 1).length
}

var minBitFlips = function(start, goal) {
    return to_binary_and_count(start ^ goal)
};

