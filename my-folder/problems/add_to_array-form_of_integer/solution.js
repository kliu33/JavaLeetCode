/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let mult = BigInt(1);
    let numy = BigInt(0);
    for (let i = num.length - 1; i >=0; i--){
        numy += BigInt(num[i]) * mult
        mult *= BigInt(10)
    }
    return (numy + BigInt(k)).toString().split('')
};