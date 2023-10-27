/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numbers = {}
    nums.forEach((num) => {
        if (!numbers[num]){
            numbers[num] = 1
        } else {
            numbers[num]++
        }
    })
    console.log(numbers)
    nums.forEach((num, index) => {
        if (num === nums[index + 1]){
            nums.splice(index, numbers[num] - 1)
        }
    })
};