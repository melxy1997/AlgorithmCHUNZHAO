/**
 * 198. 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/
 */
// 时间34.07%，空间22.43%，动态规划怎么才打败这么少人...
// 1. 如果偷第 n 个房屋的话，由于相邻的房屋不能偷，所以 dp[n] = dp[n - 2] + nums[n]
//  （即等于到第 n - 2 个房屋的最大金额 + 第 n 个房屋的金额） 
// 2. 反之如果不偷第 n 个房屋的话，那么 dp[n] = dp[n - 1]
//  （即等于到第 n - 1 个房屋的最大金额）
// => 因此状态转移方程：dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

let rob = function(nums) {
    const n = nums.length
    
    // termin.
    if (n == 0) { return 0 }
    if (n == 1) { return nums[0] }

    // init.
    let dp = new Array(n).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    // calc. 此处i是从2开始的
    for (let i = 2; i<n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return dp[n - 1]
};