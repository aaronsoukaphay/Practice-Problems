/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((a, b) => a-b)
    let count = 0
    nums.forEach((num, index) => {
        if (val === num) {
            count++
        }
    })
    nums.forEach((num, index) => {
        val === num && nums.splice(index, count)
    })
};