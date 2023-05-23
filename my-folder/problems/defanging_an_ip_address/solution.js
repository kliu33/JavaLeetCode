/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let out = ""
    for (let letter of address){
        if (letter === '.'){
            out += '[.]'
        } else {
         out += letter
        }
    }
    return out
};