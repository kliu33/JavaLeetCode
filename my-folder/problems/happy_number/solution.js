/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
        console.log(n)
    let cycle = [n]
    while (true) {
        n = n.toString().split('').map(n => parseInt(n)).reduce((sum, acc) => sum + acc * acc, 0)
        if (n === 1) return true
        if (cycle.includes(n)) return false
        cycle.push(n)
    }
};