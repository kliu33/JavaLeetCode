/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let dict = {}
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) {
            if (dict[s[i]] !== t[i]) {
                return false
            }
        } else {
            dict[s[i]] = t[i]
        }
    }
    let dict2 = {}
    for (let i = 0; i < t.length; i++) {
        if (dict2[t[i]]) {
            if (dict2[t[i]] !== s[i]) {
                return false
            }
        } else {
            dict2[t[i]] = s[i]
        }
    }
    return true
};