# @param {Integer[]} nums
# @return {Integer[]}
def find_duplicates(nums)
    num_hash = Hash.new(0)
    out = []
    nums.each {|n| num_hash[n] += 1}
    num_hash.each do |k, v|
        if v >= 2
           out << k 
        end
    end
    out
end