// class Solution {
//     public void rotate(int[] nums, int k) {
// //第一反应是用模来处理下标(i+k)%长度，创建一个新的数组作为返回值
//         int[] nums2 = new int[nums.length];
//         int l = nums.length;
//         for (int i = 0;i<l; i++){
//             nums2[(i+k)%l]=nums[i];
//         }
//          for (int i = 0;i<l; i++){
//             nums[i]=nums2[i];
//         }
//     }
// }
//第二种解法就是把数组先整个反转，再反转前K个元素再反转之后的元素
class Solution {
    public void rotate(int[] nums, int k) {
         k %= nums.length;//要处理模
        reverse(nums,0,nums.length-1);
        reverse(nums,0,k-1);
        reverse(nums,k,nums.length-1);
        
        
    }
    public int[] reverse(int[] nums, int i, int j) {
        int temp = 0;
        while(i<j){
            temp =nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i++;
            j--;
        }
        return nums;
    }
}