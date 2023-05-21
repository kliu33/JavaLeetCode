/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let num_s = num.toString()
    for (let i = 0; i < num_s.length; i++) {
        if (num_s[i] === '6') {
            return num_s.slice(0,i).concat('9').concat(num_s.slice(i+1,num_s.length))
        }
    }
    return num
};