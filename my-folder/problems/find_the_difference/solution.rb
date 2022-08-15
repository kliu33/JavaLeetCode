# @param {String} s
# @param {String} t
# @return {Character}
def find_the_difference(s, t)
    ss = s.chars.sort
    tt = t.chars.sort
    ss.each_with_index do |char, idx|
       if char != tt[idx]
          return tt[idx]
       end
    end
    return tt[-1]
end