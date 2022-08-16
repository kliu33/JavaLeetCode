# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
    n_hash = Hash.new(0)
    out = []
    nums.each {|num| n_hash[num] += 1}
    n_hash = n_hash.sort_by {|k,v| v}.reverse[0...k].map {|k,v| k}
    
end