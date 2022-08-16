# @param {Integer[]} nums
# @return {Integer}
def missing_number(nums)
    num_sorted = nums.sort
    num_sorted.each_with_index do |num, idx|
        if num != idx
            return idx
        end
    end
    return nums.length
end