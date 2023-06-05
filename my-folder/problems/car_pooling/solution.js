/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    let hash_map = {}
    for (let trip of trips) {
        for (let i = trip[1]; i < trip[2]; i++){
            if (hash_map[i]) hash_map[i] += trip[0]
            else hash_map[i] = trip[0]
            if (hash_map[i] > capacity) return false
        }
    }
    return true
};