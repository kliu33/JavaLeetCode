class Solution {
    public boolean halvesAreAlike(String s) {
        String vowels = "aeiouAEIOU";
        int mid = s.length() / 2;
        int ans = 0;
        for (int i = 0; i < mid; i++){
            if (vowels.indexOf(s.charAt(i)) != -1) ans++;
            if (vowels.indexOf(s.charAt(i+mid)) != -1) ans--;
        }
        return ans ==0;
    }
}