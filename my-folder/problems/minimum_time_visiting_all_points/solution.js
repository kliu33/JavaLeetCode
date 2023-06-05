/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    let current_pos = points[0]
    for (let i = 1; i < points.length; i++){
        let a = Math.abs(current_pos[1] - points[i][1])
        let b = Math.abs(current_pos[0] - points[i][0])
        if (a === b) {
            time += a
        } else {
            time += Math.abs(a-b)
            a < b ? time += a : time += b
            
        }
        
        current_pos = points[i]
        
    }
    return time
};