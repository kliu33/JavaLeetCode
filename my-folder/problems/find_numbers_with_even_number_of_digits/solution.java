class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        for (int num : nums){
            int digits = 0;
            int ele = num;
            while (ele > 0){
                ele /= 10;
                digits += 1;
            }
            if (digits % 2 == 0) count++;
        }
        return count;
    }
}