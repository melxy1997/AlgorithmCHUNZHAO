/**
 * 221. 最大正方形
 * https://leetcode-cn.com/problems/maximal-square/
 */

// 这一题，无论哪种解法不得不提到一个“右下角”，可能这就是前人的智慧成果吧
// 若某格子值为 1，则以此点为右下角的正方形 的最大边长为：
// {上面的正方形、左面的正方形、左上的正方形}最大边长 最小的那个，再加上此格长度1
// 而具体实现时，dp[i][j]居然与matrix的索引是错位的[i-1][j-1]，为何？
// 这与"右下角"的使用大概同源，因为这用到一个trick：
// 对于原矩阵在左上方镶边0元素，并不影响最大边长

let maximalSquare = function(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    // termin.
    if (matrix == null || matrix.length < 1 || matrix[0].length < 1) return 0;

    // init. 比较特殊的一次初始化方式
    let dp = []
    for (let i = 0; i <= height; i++) { // 镶边0元素
        dp.push(new Array(width + 1).fill(0))
    }
    let maxSide = 0;

    // calc.
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] == '1') {
                dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i][j]) + 1;
                maxSide = Math.max(maxSide, dp[i + 1][j + 1]);
            }
        }
    }

    return maxSide**2;
}

// 【Numpy卷积核遍历法】
// import numpy as np
// from scipy.signal import convolve2d
// class Solution:
//     def maximalSquare(self, matrix: List[List[str]]) -> let:
//         if not matrix: return 0
//         matrix=np.array(matrix,let)
//         for i in range(1,min(matrix.shape)+1):
//             if convolve2d(matrix,np.ones((i,i),let),'valid').max()<i**2:
//                 return (i-1)**2
//         return i**2