class Solution {
    public int largestAltitude(int[] gain) {
        int maxAlt = 0;
        int currAlt = 0;
        for (int dist : gain){
            currAlt += dist;
            if (currAlt > maxAlt) maxAlt = currAlt;
        }
        return maxAlt;
    }
}