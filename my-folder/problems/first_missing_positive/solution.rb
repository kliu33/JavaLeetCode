# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    nums_sorted = nums.select{|num| num > 0}.uniq.sort
    nums_sorted
    nums_sorted.each_with_index do |n, idx|
       if n != idx + 1
          return idx + 1 
       end
    end
    return nums_sorted.length + 1
end