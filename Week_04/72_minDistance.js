/**
 * 72. 编辑距离
 * https://leetcode-cn.com/problems/edit-distance/
 */
 // 经典二维DP，两个字符串的输入，所以将dp_table设置为二维

 let minDistance = function(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    // 依然是二维数组，邻接矩阵
    let dp = []
    for(let i=0; i<len1+1; i++) { // 让出0行0列，一种trick
        dp.push(new Array(len2+1).fill(0))
    }

    // determ. base case
    for(let i=0; i <= len1; i++) {
        dp[i][0] = i;
    }
    for(let j=0; j <= len2; j++) {
        dp[0][j] = j;
    }

    // calc.注意让出0行0列后，要从1开始遍历
    for(let i=1; i <= len1; i++) {
        for(let j=1; j <= len2; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else { // 这里要取增删改3种操作的最小值，所以可能会有嵌套的2个min(a,b)，但JS这个Math.min应该是可以取不定长参数的
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
            }
        }
    }

    return dp[len1][len2];
};