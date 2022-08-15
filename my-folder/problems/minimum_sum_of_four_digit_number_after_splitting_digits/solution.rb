# @param {Integer} num
# @return {Integer}
def minimum_sum(num)
    nums_sorted = num.to_s.chars.sort
    num1 = nums_sorted[0] + nums_sorted[2]
    num2 = nums_sorted[1] + nums_sorted[3]
    return num1.to_i + num2.to_i
end