/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (Math.floor(num/10) === 0) return num
    let num_copy = num;
    let num_arr = []
    while (num_copy !== 0) {
        num_arr.push(num_copy % 10)
        num_copy = Math.floor(num_copy/10)
    }
    let sum = 0;
    num_arr.forEach(num => sum += num)
    return addDigits(sum)
};