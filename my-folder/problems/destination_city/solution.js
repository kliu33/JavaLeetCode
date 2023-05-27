/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let from = []
    let to = []
    for (let path of paths) {
        from.push(path[0])
        to.push(path[1])
    }
    for (let city of to) {
        if (!from.includes(city)) return city
    }
};