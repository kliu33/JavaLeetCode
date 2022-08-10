# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    num_hash = Hash.new(0)
    nums.each {|num| num_hash[num] += 1}
    num_hash.each {|k,v| return k if v == 1}
end