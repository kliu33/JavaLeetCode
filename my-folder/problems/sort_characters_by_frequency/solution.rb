# @param {String} s
# @return {String}
def frequency_sort(s)
    s_hash = Hash.new(0)
    out = ""
    s.each_char {|char| s_hash[char] += 1}
    s_hash = s_hash.sort_by {|k,v| v}.reverse
    s_hash.each do |k,v|
        v.times do
           out << k 
        end
    end
    out
end