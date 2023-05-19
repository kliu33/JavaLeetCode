/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let out = [];
    let shorter = nums1.length > nums2.lenghh ? nums2 : nums1
    let longer = nums1.length > nums2.lenghh ? nums1 : nums2

    for (let i = 0; i < shorter.length; i++){
        if (longer.includes(shorter[i]) && !out.includes(shorter[i])) {
            out.push(shorter[i])
        }
    }
    return out
};