/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let hash_map = {}
    for (let ss of s) {
        if (hash_map[ss]) {
            hash_map[ss] += 1
        } else{
            hash_map[ss] = 1
        }
    }
    for (let tt of t) {
        if (hash_map[tt]) {
            hash_map[tt] -= 1
        }
        else {
            hash_map[tt] = -1
        }
    }
    return Object.values(hash_map).reduce((a,b) => Math.abs(a) + Math.abs(b))/2
};