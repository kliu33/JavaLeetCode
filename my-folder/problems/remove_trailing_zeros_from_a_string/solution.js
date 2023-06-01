/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let new_str = num.split("").reverse()
    let count = 0;
    for (let i = 0; i < new_str.length; i++) {
        if (new_str[i] === "0") count += 1
        else break
    }
    return num.slice(0, num.length - count)
};