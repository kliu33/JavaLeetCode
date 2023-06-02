/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let map = {}
    for (let i = 0; i < s.length; i++){
        if (map[s[i]]) {
            map[s[i]] = Math.abs(map[s[i]] - i)
        } else {
            map[s[i]] = i + 1
        }
    }
    for (let key in map){
        if (distance[alpha.indexOf(key)] !== map[key]) return false
    }
    return true
};