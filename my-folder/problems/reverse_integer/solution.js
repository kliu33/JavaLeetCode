/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = false;
    if (x < 0) {
        neg = true
        x *= -1
    }
    
    let num = []
    while (x > 0) {
        num.push(x % 10)
        x = Math.floor(x / 10)
    }
    let out = 0;
    let mult = 1;
    for (let i = num.length-1; i >= 0; i--) {
        out += num[i] * mult
        mult *= 10
    }
    if (out > Math.pow(2,31)) return 0
    return neg ? out * -1 : out
};