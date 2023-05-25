/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let hash_map = {}
    for (let i = 0; i < rings.length; i+=2) {
        if (hash_map[rings[i+1]]) {
            if (!hash_map[rings[i+1]].includes(rings[i])){
                hash_map[rings[i+1]].push(rings[i])
            }
        } else {
            hash_map[rings[i+1]] = [rings[i]]
        }
    }
    return Object.values(hash_map).filter(rod => rod.length === 3).length 
};