/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function(n) {
    let even = 0;
    let odd = 0;
    let isEven = true
    while (n > 0){
        if (n % 2 === 1){
            if (isEven){
                even++
            } else {
                odd++
            }
        }
        n = Math.floor(n/2)
        isEven = !isEven
    }
    return [even,odd]
};