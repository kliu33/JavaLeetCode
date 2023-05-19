/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let arr = []
    while(i < nums1.length && j < nums2.length){
        if (nums1[i] > nums2[j]){
            arr.push(nums2[j])
            j++
        } else {
            arr.push(nums1[i])
            i++
        }
    }
    if (j === nums2.length){
        arr = arr.concat(nums1.slice(i, nums1.length))
    } else {
        arr = arr.concat(nums2.slice(j, nums2.length))
    }
    if (arr.length % 2 === 1) {
        return arr[Math.floor(arr.length/2)]
    } else {
        return (arr[arr.length/2] + arr[arr.length/2 - 1]) / 2
    }

};