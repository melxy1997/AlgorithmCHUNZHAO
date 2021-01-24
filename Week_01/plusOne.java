class Solution {
    public int[] plusOne(int[] digits) {
//这个问题的难点在于进位，先把数组转换为数加一再转换为数组就可以了吧
//这道题一共分三种情况，1.无进位，2.有进位但是数组长度加一，3.有进位且数组长度变化这时只要将首位置为一即可
    for(int i = digits.length-1; i>=0;i--){
         digits[i]++;
        digits[i]= digits[i]%10;//筛除10
        if(digits[i]!=0){
            return digits;
        }
    }
    digits = new int[digits.length+1];
    digits[0]= 1;
    return digits;
    }
}