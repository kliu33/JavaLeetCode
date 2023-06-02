/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = {}
    for (let char of arr){
        if (map[char]) map[char]++
        else map[char] = 1
    }
    let count = 1;
    for (let key in map){
        if (map[key] === 1) {
            if (count === k) return key
            count++
        }
    }
    return ""
};