/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let out = []
    for (let i = 0; i < prices.length; i++){
        let price = prices[i]
        for(let j = i + 1; j < prices.length; j++){
            if (prices[j] <= price) {
                price-=prices[j]
                break;
                }
            }
        out.push(price)
    }
    return out
};