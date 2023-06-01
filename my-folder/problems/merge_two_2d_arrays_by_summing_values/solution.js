/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let map = {}
    for (let num of nums1){
        if (map[num[0]]) map[num[0]] += num[1]
        else map[num[0]] = num[1]
    }
    for (let num of nums2){
        if (map[num[0]]) map[num[0]] += num[1]
        else map[num[0]] = num[1]
    }
    let out = []
    for (let key in map){
        out.push([parseInt(key), map[key]])
    }
    return out
};