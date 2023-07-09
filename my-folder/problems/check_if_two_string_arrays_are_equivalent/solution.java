class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String wordA = "";
        String wordB = "";
        for (String word:word1){
            wordA += word;
        }
        for (String word:word2){
            wordB += word;
        }
        return wordA.equals(wordB);
    }
}