# @param {Integer[]} arr
# @return {Integer}
def min_set_size(arr)
    rem = 0
    count = 0
    a_hash = Hash.new(0)
    arr.each {|a| a_hash[a] += 1}
    a_hash = a_hash.sort_by {|k,v| v}
    while rem < (arr.length / 2)
        rem += a_hash[-1][-1]
        a_hash.pop
        count += 1
    end
    count
end