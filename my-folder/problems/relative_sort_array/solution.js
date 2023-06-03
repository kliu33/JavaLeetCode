/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = arr1.filter(ele => arr2.includes(ele))
    arr.sort((a,b) => arr2.indexOf(a) - arr2.indexOf(b))
    let arrb = arr1.filter(ele => !arr2.includes(ele))
    arrb.sort((a,b)=>a-b)
    return arr.concat(arrb)
};