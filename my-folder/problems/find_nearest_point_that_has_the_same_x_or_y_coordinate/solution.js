/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Infinity;
    let idx = -1;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            let dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1])
            if (dist < min) {
                idx = i
                min = dist
            }
        }
    }
    return idx
}