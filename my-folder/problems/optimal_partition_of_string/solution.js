/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 0;
    let i = 0;
    let cur = [];
    while (i < s.length) {
        console.log(cur)
        if (cur.includes(s[i])) {
            count += 1
            cur = [s[i]]
        } else{
            cur.push(s[i])
        }
        i++
    }
    return count + 1
};