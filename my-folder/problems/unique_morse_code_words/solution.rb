# @param {String[]} words
# @return {Integer}
def unique_morse_representations(words)
    m_hash = Hash.new(0)
    m_words = words.map{|wo| word_to_morse(wo)}
    m_words.each {|w| m_hash[w] += 1}
    m_hash.length
end

def word_to_morse (word)
    morse_word = ""
    morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    word.each_char do |letter|
        morse_word << morse[alpha.index(letter)]
    end
    morse_word
end