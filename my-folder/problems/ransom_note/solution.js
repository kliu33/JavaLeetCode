/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let set = {}
    for (let char of magazine) {
        if (set[char]) {
            set[char] += 1
        } else {
            set[char] = 1
        }
    }

    for (let char of ransomNote) {
        if (!set[char]) {
            return false
        } else {
            set[char] -= 1
        }
    }
    return Object.values(set).filter(val => val < 0).length === 0
};