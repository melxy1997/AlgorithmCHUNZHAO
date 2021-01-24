class Solution {
    public int removeDuplicates(int[] nums) {
        //用一个数字temp作为不同的数字的下标,用的是类似移动零那道题的方法
            int temp =  1;
            if (nums.length==0) return 0;
            int flag = nums[0];//第一个元素
        for (int i= 0; i<nums.length;i++) {
            if(nums[i]!=flag){
                nums[temp] = nums[i];
                temp++;
                flag = nums[i];
            }
        }
        return temp;
    }
}