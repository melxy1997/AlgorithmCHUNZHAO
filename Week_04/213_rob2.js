/**
 * 213. 打家劫舍 II
 * https://leetcode-cn.com/problems/house-robber-ii/
 */
// 所有的房屋都围成一圈+相邻房屋不可连续偷盗 => key：第一个和最后一个要隔离开
// 如何隔离？智慧成果：拆成两个独立的子问题，一个是从0到n-1，另一个是从1到n，
// 分别按照过去的方法解决(198题)，然后取两个结果最大的

let rob = function(nums) {
    const n = nums.length
    // termin.
    if (n == 0) { return 0 }
    if (n <= 2) { return Math.max(...nums) }

    // SubQ1: 1~n
    dp1 = new Array(n).fill(0)
    dp1[0] = 0
    dp1[1] = nums[1]
    for(let i = 2; i < n; i++) {
        dp1[i] = Math.max(dp1[i-1], nums[i] + dp1[i-2])
    }

    // SubQ2: 0~n-1
    dp2 = new Array(n).fill(0)
    dp2[0] = nums[0]
    dp2[1] = Math.max(nums[0], nums[1])

    for(let i = 2; i < n-1; i++) {
        dp2[i] = Math.max(dp2[i-1], nums[i] + dp2[i-2])
    }

    return dp1[n-1]>dp2[n-2]? dp1[n-1]: dp2[n-2]
};