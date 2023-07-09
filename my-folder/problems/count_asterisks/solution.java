class Solution {
    public int countAsterisks(String s) {
        boolean betweenPairs = false;
        int count = 0;
        for (int i = 0; i < s.length(); i++){
            if (s.charAt(i) == '|'){
                betweenPairs = !betweenPairs;
            }
            if (s.charAt(i) == '*' && !betweenPairs){
                count++;
            }
        }
        return count;
    }
}