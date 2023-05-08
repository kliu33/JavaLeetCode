/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let out = []
    for (let i = 0; i <words.length; i++) {
        if (checkRow(words[i])){
            out.push(words[i])
        }
    }
    return out
};

var checkRow = function(word) {
    
    const row1 = "qwertyuiopQWERTYUIOP"
    const row2 = "asdfghjklASDFGHJKL"
    const row3 = "zxcvbnmZXCVBNM"
    let row
    if (row1.includes(word[0])){
        row = row1
    } else if (row2.includes(word[0])) {
        row = row2
    } else {
        row = row3
    }

    for (let i = 0; i < word.length; i++) {
        if (!row.includes(word[i])) return false
    }
    return true
}