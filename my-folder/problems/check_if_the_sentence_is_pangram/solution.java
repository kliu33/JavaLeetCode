class Solution {
    public boolean checkIfPangram(String sentence) {
        boolean[] alpha = new boolean[26];
        for (char c : sentence.toCharArray()){
            alpha[c - 'a'] = true;
        }

        for (boolean check : alpha){
            if (check == false) return false;
        }
        return true;
    }
}