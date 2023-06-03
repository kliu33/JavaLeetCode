/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let count = 0;
    while (s.includes('AB') || s.includes('CD')) {
        if (s.includes('AB')){
            s = s.slice(0,s.indexOf('AB')) + s.slice(s.indexOf('AB') + 2, s.length)
            count++
            continue
        }
        if (s.includes('CD')){
            s = s.slice(0,s.indexOf('CD')) + s.slice(s.indexOf('CD') + 2, s.length)
            count++
            continue
        }
    }
    return s.length
};