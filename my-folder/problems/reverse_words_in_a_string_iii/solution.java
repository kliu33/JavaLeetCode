class Solution {
    public String reverseWords(String s) {
        String[] words = s.split(" ");
        String[] out = new String[words.length];
        for (int i = 0 ; i < words.length; i++){
            out[i] = reverseWord(words[i]);
        }
        return String.join(" ", out);
    }

    public String reverseWord(String s){
        String out = "";
        for (int i = s.length()-1; i >= 0; i--){
            out += s.charAt(i);
        }
        return out;
    }
}