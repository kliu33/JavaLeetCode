/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let mat = new Array(m)
    for (let i = 0; i < m; i++){
        mat[i] = new Array(n)
        for(let j = 0; j < n; j++){
            mat[i][j] = 0
        }
    }
    for (let indice of indices){
        for (let i = 0; i < n; i++){
            mat[indice[0]][i] += 1
        }
        for (let j = 0; j < m; j++){
            mat[j][indice[1]] += 1
        }
    }
    return mat.flat().filter(ele => ele % 2 === 1).length
};