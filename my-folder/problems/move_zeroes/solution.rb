# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
    numss = nums
    count = numss.count(0)
    numss.delete(0)
    count.times do 
       numss = numss.push(0)
    end
    return numss
end