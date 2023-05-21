/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) return []
    if (size > arr.length) return [arr]
    let out = []
    let sub = []
    for (let ele of arr) {
        sub.push(ele)
        if (sub.length === size) {
            out.push(sub)
            sub = []
        }
    }
    if (sub.length > 0) {
        out.push(sub)
    }
    return out
};