# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    n_hash = Hash.new(0)
    nums.each {|num| n_hash[num] += 1}
    return n_hash.sort_by{|k,v| v}[-1][0]
end