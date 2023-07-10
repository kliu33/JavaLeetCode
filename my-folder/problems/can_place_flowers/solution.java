class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        if (n==0) return true;
        if (flowerbed.length == 1) return flowerbed[0] == 0;
        int placed = n;
        for (int i = 0; i < flowerbed.length; i++){
            if (i == 0){
                if (flowerbed[i]==0 && flowerbed[i+1]==0){
                    flowerbed[i] = 1;
                    placed--;
                }
            } else if(i==flowerbed.length-1){
                if (flowerbed[i]==0 && flowerbed[i-1] ==0){
                    flowerbed[i] = 1;
                    placed--;
                }
            } else{
                if(flowerbed[i-1] == 0 && flowerbed[i] == 0  && flowerbed[i+1] == 0){
                    flowerbed[i] = 1;
                    placed--;
                }
            }
            if (placed == 0) return true;
        }
        return false;
    }
}