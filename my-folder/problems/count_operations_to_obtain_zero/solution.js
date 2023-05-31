/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    count = 0;
    while (num1 !== 0 && num2 !== 0) {
        count += 1
        num1 >= num2 ? num1 -= num2 : num2 -= num1
    }
    return count
};