/**
 * 64. 最小路径和
 * https://leetcode-cn.com/problems/minimum-path-sum/
 */

let minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length

    // 这个二维0数组的创建方式 可能不太优雅，没办法
    let dp = []
    for(let i=0; i<m; i++){
        dp.push(new Array(n).fill(0))
    }

    // determ. base case
    dp[0][0] = grid[0][0];
    for (let j = 1; j < n; j++) { 
        dp[0][j] = dp[0][j-1] + grid[0][j]
    }
    for (let i = 1; i < m; i++) { 
        dp[i][0] = dp[i-1][0] + grid[i][0] 
    }

    // calc. 注意0,0已经被填好了，要从1开始计算
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]//横走 竖走中都+grid了，不如提到外面
        }
    }

    return dp[m-1][n-1]

/*
 class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        dp = [[0 for i in range(n)] for j in range(m)]

        dp[0][0] = grid[0][0]

        for i in range(1,n):
            dp[0][i] = dp[0][i-1] + grid[0][i]

        for j in range(1,m):
            dp[j][0] = dp[j-1][0] + grid[j][0]

        for i in range(1,m):
            for j in range(1,n):
                dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]      

        return dp[m-1][n-1]
*/