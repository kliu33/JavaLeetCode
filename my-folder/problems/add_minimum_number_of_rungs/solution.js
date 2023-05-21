/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    rungs.unshift(0)
    let add = 0;
    for (let i = 0; i<rungs.length-1; i++){
        if (rungs[i + 1] - rungs[i] > dist) {
            add += Math.floor(((rungs[i + 1] - rungs[i]) - 1) / dist)
        }
    }
    return add
};