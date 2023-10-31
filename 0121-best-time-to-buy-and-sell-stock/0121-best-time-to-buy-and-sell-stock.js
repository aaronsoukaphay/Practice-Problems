/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0]
    let lowestIndex = 0
    let profit = 0
    prices.forEach((price, i) => {
        if (price < lowest){
            lowest = price
            lowestIndex = i
        }
        if (i > lowestIndex && price - lowest > profit){
            profit = price - lowest
        }
    })
    return profit
}