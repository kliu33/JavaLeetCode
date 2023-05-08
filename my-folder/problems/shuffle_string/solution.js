/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let out = Array(indices.length)
    for (let i = 0; i < indices.length; i++) {
        out[indices[i]] = s[i]
    }
    return out.join("")
};