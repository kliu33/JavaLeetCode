# @param {Integer} num
# @return {Integer}
def add_digits(num)
    n_num = num.to_s.chars
    n_num = n_num.map{|num| num.to_i}
    while n_num.length != 1
       sum = 0
       n_num.each {|numb| sum += numb}
       n_num = sum.to_s.chars
       n_num = n_num.map{|num| num.to_i}
    end
    return n_num[0]
end