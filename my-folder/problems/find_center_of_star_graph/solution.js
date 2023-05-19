/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const set = new Set();
    let edgey
    edges[0].concat(edges[1]).forEach(edge => {
        if(set.has(edge)){
            edgey = edge
        } else {
            set.add(edge)
        }
        } 
    )
    return edgey
};