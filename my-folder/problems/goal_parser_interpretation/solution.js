/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let out = ""
    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            out += 'G'
        } else if (command[i] === '(') {
            if (command[i+1] === ')') {
                out += 'o'
            } else {
                out += 'al'
            }
        }
    }
    return out
};