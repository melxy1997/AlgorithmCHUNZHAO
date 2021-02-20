/**
 * 231. 2的幂
 * https://leetcode-cn.com/problems/power-of-two/
 */
var isPowerOfTwo = function(n) {
    if (n<=0) return false
    // 小知识n & (n-1)的功能是 将二进制表示中 倒数第一个1 变成0
    // 要是没剩下1，说明整个二进制表示里就一个1，那肯定是2的pow了
    let rest = n & (n-1)
    return rest==0
};