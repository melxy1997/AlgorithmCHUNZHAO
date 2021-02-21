// JS提交会出错，Java就没事

/**
 * 190. 颠倒二进制位
 * https://leetcode-cn.com/problems/reverse-bits/
 */
// 难者不会 会者不难，没学之前我真不会
// 基本操作就是看一下输入二进制表示的最右位是0还是1，然后放在result（空的）32位的最左侧
// 然后看输入的右侧第二位是几，放在result的左侧第二位，以此类推；
// 那么，如何看右侧第i位是几，以及怎么放在result左侧第i位呢？
// n & 1可算出仅有最右位的值，n>>i可右移i位 再次&1即可得到从右数第i位的全部值
// 右数第i位的值<<i就可得让它出现在从左数第i位最后使用按位或操作合并到一起即可
// 但是在编程上有更好的办法，每次循环都让取出来的这个值左移一格 并加入新值，
// 循环结束自然就出现在左边数第i位了，就有种队列的感觉！

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
    return result
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