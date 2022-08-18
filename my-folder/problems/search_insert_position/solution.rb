# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    return nums.index(target) if nums.include?(target)
    (nums<<target).sort.index(target)
end