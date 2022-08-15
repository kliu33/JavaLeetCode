# @param {String} time
# @return {String}
def maximum_time(time)
    arr = time.chars
    arr.each_with_index do |char, idx|
        if idx == 0 && char == "?"
            if arr[1] == "?" || arr[1].to_i < 4
                arr[0] = 2
            else
                arr[0] = 1
            end
        end
        if idx == 1 && char == "?"
           if arr[0].to_i != 2
              arr[1] = 9
           else
              arr[1] = 3
           end
        end
        if idx == 3 && char == "?"
           arr[3] = 5
        end
        if idx == 4 && char == "?"
           arr[4] = 9
        end
    end
    return arr.join
end