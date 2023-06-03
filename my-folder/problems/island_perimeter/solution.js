/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let out = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === 1) {
                let counts = 4;
                if (i !== 0) {
                  if (grid[i-1][j] ===1 ) counts--
                }
                if (j !== 0) {
                    if (grid[i][j-1] === 1) counts--
                }
                if (i !== grid.length-1) {
                    if (grid[i+1][j] === 1) counts--
                }
                if (j !== grid[0].length-1){
                    if (grid[i][j+1] === 1) counts--
                }
                out += counts
            }
        }
    }
    return out
};