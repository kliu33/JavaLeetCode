# @param {Integer} n
# @return {Boolean}
def is_power_of_four(n)
    na = n
    while na != 1
        if na % 4 == 0 && na != 0
            na /= 4
        else
            return false
        end
    end
    return true
end