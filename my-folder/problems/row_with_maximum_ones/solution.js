/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let row = 0;
    let count = 0;
    for (let i = 0; i < mat.length; i++){
        if (mat[i].filter(num => num === 1).length > count) {
            row = i
            count = mat[i].filter(num => num === 1).length
        }
    }
    return [row,count]
};