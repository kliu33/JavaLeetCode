/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let hash_map = {}
    for (let nu of num){
        if (hash_map[nu]) hash_map[nu]++
        else hash_map[nu] = 1
    }
    console.log(hash_map)
    for (let i =0; i< num.length; i++){
        if (num[i] ==='0' && !hash_map[i]) continue
        if (hash_map[i] !== parseInt(num[i])) return false
    }
    return true
};