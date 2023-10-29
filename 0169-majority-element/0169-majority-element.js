/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = {}
    let total
    nums.forEach((num) => {
        if (!counts[num]){
            counts[num] = 1
            if (counts[num] > (nums.length/2)){
                total = num
            }
        } else {
            counts[num]++
            if (counts[num] > (nums.length/2)){
                total = num
            }
        }
    })
    console.log(counts)
    return total
};