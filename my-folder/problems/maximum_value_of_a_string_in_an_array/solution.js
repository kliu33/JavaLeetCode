/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    for (let str of strs){
        if (letters(str)) {
            if (str.length > max) max = str.length
        } else {
            if (parseInt(str) > max) max = parseInt(str)
        }
    }
    return max
};

var letters = function(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let char of str) {
        if (alpha.includes(char)) return true
    }
    return false;
}