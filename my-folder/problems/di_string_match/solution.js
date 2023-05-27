/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let letters = s.split('')
    let decrease = letters.filter(ele => ele==='D').length
    let out = [decrease]
    let left_idx = 1;
    let right_idx = 1;
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'I') {
            out.push(decrease + right_idx)
            right_idx++
        } else {
            out.push(decrease - left_idx)
            left_idx ++
        }
    }
    return out
};