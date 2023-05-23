/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU"
    let words = s.split('')
    let i = 0;
    let j = s.length-1
    while (i < j) {
        if (!vowels.includes(words[i])) {
            i++;
            continue;
        }
        if (!vowels.includes(words[j])) {
            j--
            continue;
        }
        [words[i],words[j]] = [words[j],words[i]]
        i++
        j--
    }
    return words.join('')
}