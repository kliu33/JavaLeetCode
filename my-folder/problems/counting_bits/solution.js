/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let out = []
    for (let i = 0; i <= n; i++){
        out.push(binary(i).filter(num => num === 1).length)
    }
    return out
};

var binary = function(n){
    let out = []
    while (n > 0) {
        out.push(n % 2 === 1 ? 1 : 0 )
        n = Math.floor(n / 2)
    }
    return out
}