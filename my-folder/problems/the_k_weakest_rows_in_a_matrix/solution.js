/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    for (let i = 0; i < mat.length; i++){
        mat[i].push(i)
    }
    mat.sort((a,b) => countOnes(a.slice(0,a.length-1)) - countOnes(b.slice(0,b.length-1)))
    return mat.map(map => map[map.length-1]).slice(0,k)
};

var countOnes = function(arr){
    let count = 0;
    for (let ele of arr){
        if (ele === 1) count ++
        else break
    }
    return count
}