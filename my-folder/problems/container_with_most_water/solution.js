/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1
    while (i < j) {
        let shorter = height[i] < height[j] ? height[i] : height[j]
        if ((shorter * (j - i)) > max) {
            max = shorter * (j - i)
        }
        if (shorter === height[i]) {
            i++
        } else {
            j--
        }
    }
    return max
};