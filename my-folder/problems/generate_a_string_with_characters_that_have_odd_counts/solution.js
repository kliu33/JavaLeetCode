/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let out =""
    if (n % 2 === 0){
        for(let i = 0; i < n-1; i++){
            out += 'a'
        }
        out += 'b'
    } else {
        for (let i = 0; i < n; i++){
            out += 'a'
        }
    }
    return out
};