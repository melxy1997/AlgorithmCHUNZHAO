/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 */
var hammingWeight = function (n) {
    if (n == 0) return 0
    let ans = 0
    // 关注一下while这个判断，之前写n>0会算错，是没想到含1二进制还能有负的，不应该排除他们
    while (n != 0) {
        n = n & (n - 1)
        ans++
    }
    return ans
};