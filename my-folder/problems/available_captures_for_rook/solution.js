/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let count = 0;
    let pos;
    outer:  for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++){
            if (board[i][j] == 'R') {
                pos = [i,j]
                break outer
            }
            
        }
    }
    for (let k = pos[1]; k >= 0; k--){
        if (board[pos[0]][k] === 'p') {
            count++
            break
        } else if (board[pos[0]][k] ==='B') {
            break;
        }
    }
    for (let k = pos[1]; k < board.length; k++){
        if (board[pos[0]][k] === 'p') {
            count++
            break
        } else if (board[pos[0]][k] ==='B') {
            break;
        }
    }
    for (let k = pos[0]; k >= 0; k--){
        if (board[k][pos[1]] === 'p') {
            count++
            break
        } else if (board[k][pos[1]] ==='B') {
            break;
        }
    }
    for (let k = pos[0]; k < board.length; k++){
        if (board[k][pos[1]] === 'p') {
            count++
            break
        } else if (board[k][pos[1]] ==='B') {
            break;
        }
    }
    return count
};