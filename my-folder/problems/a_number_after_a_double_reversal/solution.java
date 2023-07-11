class Solution {
    public boolean isSameAfterReversals(int num) {
        if (num == 0) return true;
        int digit = num % 10;
        return digit != 0;
    }
}