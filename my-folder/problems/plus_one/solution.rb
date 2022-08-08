# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    return (digits.join.to_i + 1).digits.reverse
end