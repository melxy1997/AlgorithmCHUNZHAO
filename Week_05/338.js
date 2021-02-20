/**
 * 338. 比特位计数
 * https://leetcode-cn.com/problems/counting-bits/
 */
// 跟前面的题代码都一样，只是包裹了一下
var countBits = function (num) {
    let ans = new Array(num + 1).fill(0)
    for (let i = num; i >= 0; i--) {
        let n = i
        while (n != 0) {
            n &= n - 1
            ans[i]++
        }
    }
    return ans
};