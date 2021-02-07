var maxProfit = function(prices) {
    /**
     * 一个非常巧妙的DP解法
     * dp[i][0]表示第i天未持有股票时最大利润
     * dp[i][1]表示第i天仍持有股票时最大利润
     * 初始值dp[0][0] = 0，dp[0][1] = -price[0]
     * 最终答案一定时最后一天卖出股票赚的钱 即dp[n-1][0]
     *  */ 
    let n = prices.length
    let dp = new Array(n).fill([0,0])
    dp[0][1] = -prices[0]

    for (let i=1; i<n; i++) {
        // console.log(i,dp)
        dp[i][0] = Math.max(dp[i-1][0], dp[i][1] + prices[i]) //今天不持有的利润=昨天就没有的利润or昨天股票卖了赚钱
        dp[i][1] = Math.max(dp[i-1][1], dp[i][0] - prices[i])
    }
    return dp[n-1][0]
};