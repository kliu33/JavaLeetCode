/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);
    let out = 0
    for (let i = 0 ; i < piles.length / 3 ; i++) {
        let idx = (i * 2) + 2
        console.log(piles[piles.length - idx])
        out += piles[piles.length - idx]
    }
    return out
};