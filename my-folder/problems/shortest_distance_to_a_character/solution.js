/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let arr = []
    let out = []
    for (let i = 0; i < s.length; i++){
        if (s[i] === c) arr.push(i)
    }
    for (let i = 0; i < s.length; i++){
        out.push(Math.min(...arr.map(ele => Math.abs(ele - i))))
    }
    return out
};