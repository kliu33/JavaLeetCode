/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let com = []
    let bin = []
    while (num > 0){
        if (num % 2 === 0) {
            bin.push(0)
        } else {
            bin.push(1)
        }
        num = Math.floor(num/2)
    }
    for (let i = 0; i < bin.length; i++){
        com.push(bin[i] ^ 1)
    }
    let out = 0;
    let mult = 1;
    for (let i = 0; i < com.length; i++){
        out += com[i] * mult
        mult *= 2
    }
    return out
};

