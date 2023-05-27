/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let left = s.slice(0,s.length/2)
    let right = s.slice(s.length/2, s.length)
    let vowels = "aeiouAEIOU"
    let count = 0;
    for (let i = 0; i < left.length; i++){
        if (vowels.includes(left[i])) count ++;
        if (vowels.includes(right[i])) count --;
    }
    return count === 0
};