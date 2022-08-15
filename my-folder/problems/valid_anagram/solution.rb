# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    s_hash = Hash.new(0)
    t_hash = Hash.new(0)
    s.each_char {|char| s_hash[char] += 1}
    t.each_char {|char| t_hash[char] += 1}
    s_sorted = s_hash.sort_by{|k,v| k}
    t_sorted = t_hash.sort_by{|k,v| k}
    if s_sorted == t_sorted
        return true
    else
        return false
    end
end