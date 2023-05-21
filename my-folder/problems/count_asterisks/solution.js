/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;
    let counting = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') counting = !counting
        if (s[i] === '*' && counting) count += 1
    }
    return count
};