/**
 * 32. 最长有效括号
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 */
// 有好多其他神奇巧妙的解法，用DP的话 逻辑比较复杂：
// 遇到 ')' 时，往左边去找跟它匹配的 '('，如果存在，那么有效长度在 dp[i - 1] 基础上加 2
// dp[i - 1] 是以 s[i - 1] 结尾的字符串的最长有效括号长度，设它为 k，
// 也就是 [i - k, i - 1] 这段是有效括号字符串，
// 如果这段字符串前面的那个字符 s[i - k - 1] 是 '(' 的话，那么有效长度加 2

let longestValidParentheses = function (s) {
    const n = s.length
    let dp = Array(n).fill(0);

    for (let i = 1; i < n; i++) {
        // 以 '(' 结尾的字符串是无效的不管，只看')'结尾的
        if (s[i] == ')') {

            if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + 2;

                if (i - dp[i - 1] - 2 > 0) { // 如果匹配到的 '(' 前面还有有效长度的话，也加上
                    dp[i] += dp[i - dp[i - 1] - 2];
                }
            }
        }
    }
    return Math.max(...dp, 0);
};

