/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a,b) => a -b)
    return arr.sort((a,b) => numOfOnes(a) - numOfOnes(b))
};

var numOfOnes = function(num){
    let count = 0;
    while (num > 0) {
        if (num % 2 === 1) count++
        num = Math.floor(num/2)
    }
    return count
}