class Solution {
    public int mostWordsFound(String[] sentences) {
        int max = 0;
        for (String sentence : sentences){
            int length = sentence.split(" ").length;
            if (length > max) max = length;
        }
        return max;
    }
}