/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    let arrs = new Array(strs[0].length)
    for (let i = 0; i < arrs.length; i++) {
        arrs[i] = []
    }
    for (let str of strs){
        for (let i = 0; i < str.length; i++){
            arrs[i].push(str[i])
        }
    }
    outer: for (let arr of arrs) {
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]) {
                count += 1
                continue outer
            }
        }
    }
    return count
};