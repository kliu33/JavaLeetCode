/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let pos_x = 0;
    let pos_y = 0;
    for (let move of moves){
        if (move === "U"){
            pos_y += 1;
        }else if (move === "D"){
            pos_y -= 1;
        }else if (move === "L"){
            pos_x -= 1;
        } else {
            pos_x += 1;
        }
    }
    return (pos_x === 0 && pos_y === 0)
};