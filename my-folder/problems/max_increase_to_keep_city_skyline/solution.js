/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let out = 0;
    let rows = []
    let cols = []
    for (let i = 0; i < grid.length; i++){
        rows.push(Math.max(...grid[i]))
    }
    for (let i = 0; i < grid.length; i++){
        let co = grid.map(row => row[i])
        cols.push(Math.max(...co))
    }
    for (let i = 0; i < grid.length; i++){
        for (let j =0 ; j < grid.length; j++){
            rows[i] < cols[j] ? out += rows[i] - grid[i][j] : out += cols[j]- grid[i][j]
        }
    }
    return out
};