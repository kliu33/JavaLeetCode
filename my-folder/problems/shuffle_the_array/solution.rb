# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer[]}
def shuffle(nums, n)
    out = []
    x_arr = nums[0..n]
    y_arr = nums[n..2*n-1]
    (0..n-1).each do |idx|
        out << x_arr[idx]
        out << y_arr[idx]
    end
    out
end