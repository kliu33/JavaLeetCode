/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let tcopy = t
    for (let i = 0; i < s.length; i++) {
        if (tcopy.includes(s[i])){
            console.log(tcopy)
            tcopy = tcopy.slice(tcopy.indexOf(s[i])+1)
        } else {
            return false
        }
    }
    return true
};