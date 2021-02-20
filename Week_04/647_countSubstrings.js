/**
 * 647. 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * https://leetcode-cn.com/problems/palindromic-substrings/solution/647-hui-wen-zi-chuan-dong-tai-gui-hua-fang-shi-qiu/
 */

// 看起来本题dp_table的定义方式 被人们称之为“区间型DP”，据说leetcode这种还比较多
// 字符串s[i⋯j]是否为回文子串，
// 如果是，dp[i][j]=true；如果不是, dp[i][j]=false
// base case：只有一个字母的时候肯定是回文子串。
// 为什么从右下角遍历：（要有mindset，题解中画得很好）
// 因为在填dp表时，(i, j) 位置的值依赖于（i+1,j-1），也就是当前位置的左下方。
// 显然如果从上往下遍历，左下方的值就完全没有初始化，当然当前位置也会是错误的。
// 但是从右下角遍历，就保证了左下方的所有值都已经计算好了。

let countSubstrings = function(s) {
    const n = s.length
    
    // init.
    let dp = []
    for(let i = 0; i<n ; i++) {
        dp.push(new Array(n).fill(false))
    }
    
    // determ. base case
    let res = n // 提前计算单元素的回文子串
    for(let i = 0; i<n ; i++) {
        dp[i][i] = true
    }

    // calc.
    for (let i = n-1; i >= 0; i--) {
        for (let j = i+1; j < n; j++) { // 对邻接矩阵从右下角开始遍历
            if (s[i] == s[j]) { // 检测对称值
                if (j-i == 1) { // 相邻，重复为特殊情况
                    dp[i][j] = true
                } else { // 非相邻，看子串是不是回文
                    dp[i][j] = dp[i+1][j-1]
                }
            } else {   
                dp[i][j] = false
            }
            // 根据dp值产生结果res
            if (dp[i][j]) res += 1
        }
        
    }
    return res
};

// 回文子串问题的经典成果叫做马拉车算法，日后再学