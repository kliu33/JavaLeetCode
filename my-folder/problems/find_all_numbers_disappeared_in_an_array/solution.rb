# @param {Integer[]} nums
# @return {Integer[]}
def find_disappeared_numbers(nums)
    n = nums.length
    nums_sorted = nums.uniq.sort
    return Array(1..n) - nums_sorted 
end