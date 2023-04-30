/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let out = [[1]]
    for (let i = 1; i <= rowIndex; i++) {
      let arr = []
      let prev_level = out[out.length-1]
      for (let j = 0; j <= prev_level.length; j++) {
        if (j===0 || j === prev_level.length) {
          arr.push(1)
        } else {
          arr.push(prev_level[j-1] + prev_level[j])
        }
      }
      out.push(arr)
    }
    return out[rowIndex]
};