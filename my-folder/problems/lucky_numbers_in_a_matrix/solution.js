/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let min_col = new Array(matrix[0])
    for (let i = 0; i < matrix[0].length; i++){
        let arr = []
        for (let j = 0; j<matrix.length; j++){
            arr.push(matrix[j][i])
        }
        min_col[i] = Math.max(...arr)
    }
    let min_row = matrix.map(arr => Math.min(...arr))
    let out = []
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            if (matrix[i][j] === min_col[j] && matrix[i][j] === min_row[i]) out.push(matrix[i][j])
        }
    }
    return out
};