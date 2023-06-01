/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    let out = 0;
    outer: for (let i = 0; i < boxTypes.length; i++){
        for (let j = 0; j < boxTypes[i][0]; j++) {
            if (truckSize > 0) {
                out += boxTypes[i][1]
                truckSize--
            } else {
                break outer
            }
        }
    }
    return out
};