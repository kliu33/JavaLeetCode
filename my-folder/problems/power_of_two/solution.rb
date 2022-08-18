# @param {Integer} n
# @return {Boolean}
def is_power_of_two(n)
    return false if n == 0
    return true if n == 1
    while n % 2 == 0
        n /= 2
    end
    n == 1
end