# @param {Integer[]} nums
# @return {Integer[]}
def majority_element(nums)
    out = []
    n_hash = Hash.new(0)
    nums.each {|num| n_hash[num] += 1}
    n_hash = n_hash.select{|k,v| v > (nums.length * 1.0)/ 3}
    n_hash.each {|k,v| out << k}
    return out
end