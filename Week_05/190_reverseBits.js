/**
 * 190. 颠倒二进制位
 * https://leetcode-cn.com/problems/reverse-bits/
 */
// 基本想法：看一下输入的二进制表示 最右位是0还是1，然后把它放在result（空的）32位的最左位
// 然后看输入的右数第二位是几，放在result的左数第二位，以此类推32位 完成全部位置的反转；
// 那么，如何看n从右数第i位是几，以及怎么把它放在result从左数的第i个位置呢？
// 知识点！ n & 1可算出最右位的值；n循环右移i位 它再 &1 得到的就是n从右数第i位的值
// 这个值左移(32-i)位 就可让它出现在从左数的第i位；得到32个结果，使用按位或|操作合并。
// 至此，我们已经至少学会一个经典位操作：取最右侧的值val = n & 1

// 32位的数就相当于是个长度为32的数组 你总针对最右边那个人操作 那它就是个栈啊！

// 那么这道题在编程上本该这么做：每次循环 n出栈一个元素val，result入栈这个元素，循环32次。
// 首先拿到最右侧元素 val = n & 1，然后将n循环右移一格 n = n >> 1，这就形成了一次n的出栈；
// 接下来result循环左移一格 以空出最右侧的位置 result = result << 1，
// 然后把val放在result最右侧 result = result | val，这就形成了一次result的入栈；
// 32次循环后，自然result中保存的是n中元素的倒序

var reverseBits = function(n) {
    let result = 0
    for(let i=0; i<32; i++) {
        // 出旧队列
        let val = n & 1
        n = n >> 1
        // 入新队列
        result = result << 1
        result = result | val
    }
    return result >>> 0 // 我的天 这还藏着一坑呢，得>>>0无符号右移，不然正负错乱
};

/*
public class Solution {
    
    * 190. 颠倒二进制位
    * https://leetcode-cn.com/problems/reverse-bits/
    
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int result = 0;
        for(int i=0; i<32; i++) {
            // 出旧队列
            int val = n & 1;
            n = n >> 1;
            // 入新队列
            result = result << 1;
            result = result | val;
        }
        return result;
    }
}
*/