/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let time = 0;
    let paper = true;
    let metal = true;
    let glass = true;
    let i = garbage.length - 1
    let collect_time = garbage.reduce((acc, ele) => acc += ele.length, 0)
    while((paper || glass || metal) && i >= 0){
        if (garbage[i].includes('G') && glass){
            time += travel.slice(0, i).reduce((acc, ele) => acc+=ele, 0)
            glass = false
        }
        if (garbage[i].includes('P') && paper){
            time += travel.slice(0, i).reduce((acc, ele) => acc+=ele, 0)
            paper = false
        }
        if (garbage[i].includes('M') && metal){
            time += travel.slice(0, i).reduce((acc, ele) => acc+=ele, 0)
            metal = false
        }
        i--
    }
    return time + collect_time
};