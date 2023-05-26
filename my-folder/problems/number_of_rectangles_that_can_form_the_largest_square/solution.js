/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let squares = []
    for (let i = 0; i < rectangles.length; i++) {
        if (rectangles[i][0] > rectangles[i][1]) squares.push(rectangles[i][1])
        else squares.push(rectangles[i][0])
    }
    return squares.filter(max => max === Math.max(...squares)).length
};