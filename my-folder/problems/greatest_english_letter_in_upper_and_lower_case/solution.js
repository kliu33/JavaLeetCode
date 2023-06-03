/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let out = "";
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let char of alpha){
        if (s.includes(char) && s.includes(char.toUpperCase())) out = char
    }
    return out.toUpperCase()
};