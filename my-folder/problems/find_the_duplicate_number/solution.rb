# @param {Integer[]} nums
# @return {Integer}
def find_duplicate(nums)
    num_hash = Hash.new(0)
    nums.each {|num| num_hash[num] += 1}
    num_hash.each do |k,v|
       if v >= 2
          return k 
       end
    end
end