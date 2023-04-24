# @param {String} s
# @return {Integer}
def roman_to_int(s)
    obj1 = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 
    'C' => 100, 'D' => 500, 'M' => 1000}
    total = 0;
    s.each_char.with_index do |char, index| 
        current_val = obj1[s[index]];
        next_val = obj1[s[index+1]];

        if next_val && current_val < next_val
            total -= current_val
        else
            total += current_val
        end
    end
    return total
end