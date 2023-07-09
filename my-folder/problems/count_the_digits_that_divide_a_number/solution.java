class Solution {
    public int countDigits(int num) {
        int out = 0;
        int n = num;
        while(n > 0) {
            int digit = n%10;
            if (num % digit == 0) out++;
            n/=10;
        }
        return out;
    }
}