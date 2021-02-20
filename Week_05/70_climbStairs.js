/**
 * 70. 爬楼梯
 * https://leetcode-cn.com/problems/climbing-stairs/
 */
// 依然是傻递归超时，因为是2^n的复杂度，因此用dp
var climbStairs = function(n) {
    if (n<3) return n

    dp = new Array(n)
    dp[0] = 1
    dp[1] = 2

    for(i=2; i<n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n-1]
};