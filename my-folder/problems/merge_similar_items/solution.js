/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let hash_map = {}
    let items = items1.concat(items2)
    for (let item of items) {
        if (hash_map[item[0]]) {
            hash_map[item[0]] += item[1]
        } else {
            hash_map[item[0]] = item[1]
        }
    }
    let out = []
    for (let key in hash_map) {
        out.push([key, hash_map[key]])
    }
    return out
};