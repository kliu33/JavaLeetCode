# @param {Integer[]} nums
# @return {Integer}
def third_max(nums)
    num_sorted = nums.uniq.sort
    if num_sorted.length < 3
        return num_sorted[-1]
    else
        return num_sorted[-3]
    end
end