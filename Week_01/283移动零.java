class Solution {
    public void moveZeroes(int[] nums) {
        int  temp = 0;
        for (int i = 0 ; i<nums.length ;i++){
            if(nums[i]!=0){
                nums[temp] = nums[i];
                if(temp!=i){
                    nums[i] = 0;
                }
                temp++;
            }
        }
    }
}
//核心思想将不为零的数挑出来放在数组的前面，原本的位置置为零，
//如果恰好是temp==i就不用再置为0了因为不需要换原来的数字也不能丢失，temp就是下一个要放非零数字的下标