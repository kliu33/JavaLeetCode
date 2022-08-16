# @param {String} s
# @return {Integer}
def first_uniq_char(s)
    s_hash = Hash.new(0)
    out = []
    s.each_char {|s| s_hash[s] += 1}
    s_hash.each {|k,v| out << k if v == 1}
    out.map! {|o| s.index(o)}
    return -1 if out.length < 1
    return out.sort[0]
end