/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n===0) return true
    if (flowerbed.length === 1) return !flowerbed[0]
    let out = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0) {
            if (flowerbed[i] === 0 && flowerbed[i+1] === 0){
                flowerbed[i] = 1
                out += 1
            }
        } else if (i === flowerbed.length-1) {
            if (flowerbed[i] === 0 && flowerbed[i-1] === 0){
                flowerbed[i] = 1
                out += 1
            } 
        } else {
            if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1
            out += 1
        }

        }
        
    }
    return out >= n
};