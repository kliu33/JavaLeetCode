# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    n_hash = Hash.new(0)
    nums.each {|n| n_hash[n] += 1}
    n_hash.each do |k, v|
        if v >= 2
            return true
        end
    end
    return false
end