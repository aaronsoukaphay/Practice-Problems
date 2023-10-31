/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0]
    let lowestIndex = 0
    let profit = 0
    // for (let i = 0; i < prices.length; i++) {
    //     if (prices[i] < lowest){
    //         lowest = prices[i]
    //         lowestIndex = i
    //         if (lowestIndex === prices.length - 1){
    //             return 0
    //         }
    //     }
    // }
    prices.forEach((price, i) => {
        if (price < lowest){
            lowest = price
            lowestIndex = i
        }
        if (i > lowestIndex && price - lowest > profit){
            profit = price - lowest
        }
    })
    console.log('lowest', lowest)
    console.log('lowestIndex', lowestIndex)
    console.log('profit', profit)
    return profit
}