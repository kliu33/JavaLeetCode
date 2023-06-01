/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let out = []
    for (let i = 0; i < arr.length; i++){
        if (i === arr.length - 1) out.push(-1)
        else out.push(Math.max(...arr.slice(i+1, arr.length)))
    }
    return out
};