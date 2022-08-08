# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    arr = nums
    arr.delete(val)
    return arr.length
end