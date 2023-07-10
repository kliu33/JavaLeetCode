class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap <Character,Integer> hash = new HashMap <>();
        int sl=s.length();
        int tl=t.length();
        if(sl!=tl){return false;}
        for(int i=0;i<sl;i++){
            hash.put(s.charAt(i),hash.getOrDefault(s.charAt(i),0)+1);
            hash.put(t.charAt(i),hash.getOrDefault(t.charAt(i),0)-1);
        }
        for(char c:hash.keySet()){
            if(hash.get(c)!=0){return false;}
        }
        return true;
    }
}