/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let str1 = ""
    for (let char of firstWord){
        str1 += alpha.indexOf(char).toString()
    }
    let str2 = ""
    for (let char of secondWord){
        str2 += alpha.indexOf(char).toString()
    }
    let str3 = ""
    for (let char of targetWord){
        str3 += alpha.indexOf(char).toString()
    }
    return parseInt(str1) + parseInt(str2) === parseInt(str3)
};