class Solution {
    public int sumOfUnique(int[] nums) {
        int out = 0;
        HashMap <Integer, Integer> set = new HashMap<Integer, Integer>();
        for (int num : nums){
            set.put(num, set.getOrDefault(num, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : set.entrySet()){
            if (entry.getValue() == 1) out += entry.getKey();
        }
        return out;
    }
}