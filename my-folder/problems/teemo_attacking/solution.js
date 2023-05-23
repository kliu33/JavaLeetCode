/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;
    for (let i = 0; i < timeSeries.length-1; i++){
        if (timeSeries[i + 1] - timeSeries[i] >= duration) {
            time += duration
        } else {
            time += timeSeries[i + 1] - timeSeries[i]
        }
    }
    return time += duration
};