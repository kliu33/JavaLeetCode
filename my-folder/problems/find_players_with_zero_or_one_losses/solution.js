/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let map = {}
    for (let match of matches){
        if (!map[match[0]]){
            map[match[0]] = 0
        }
        if (map[match[1]]){
            map[match[1]] ++
        } else {
            map[match[1]] = 1
        }
    }
    let out1 = []
    let out2 = []
    for (let key in map){
        if (map[key] === 0) out1.push(parseInt(key))
        if (map[key] === 1) out2.push(parseInt(key))
    }
    return [out1, out2]
};