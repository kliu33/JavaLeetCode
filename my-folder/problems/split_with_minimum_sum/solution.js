/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    let nums = num.toString().split('').map(num => parseInt(num)).sort((a,b) => a-b)
    let num1 = ""
    let num2 = ""
    for (let i = 0; i < nums.length; i++){
        if (i % 2 === 0) num1 += nums[i].toString()
        else num2 += nums[i].toString()
    }
    return parseInt(num1) + parseInt(num2)
};