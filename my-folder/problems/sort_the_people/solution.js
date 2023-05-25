/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let out = new Array(names.length)
    let heights_sorted = [...heights].sort((a,b) => a-b).reverse()
    for (let i = 0; i < names.length; i++) {
        out[heights_sorted.indexOf(heights[i])] = names[i]
    }
    return out
};