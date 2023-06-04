/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let vowels = "aeiouAEIOU"
    let words = sentence.split(' ')
    for (let i = 0; i < words.length; i++){
        if (vowels.includes(words[i][0])) {
            words[i] = words[i] + 'ma'
        } else {
            words[i] = words[i].slice(1) + words[i][0] + 'ma';
        }
        words[i] += 'a'.repeat(i + 1)
    }
    return words.join(' ')
};