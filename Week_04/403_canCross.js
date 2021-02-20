/**
 * 403. 青蛙过河
 * https://leetcode-cn.com/problems/frog-jump/
 */

// 一个数学归纳法的解释：
// * 能否跳到位置需要为0的石头？可以，跳0步
// * 能否跳到位置为1的石头？上一步跳到0，那么这一步跳0+1,所以可以跳到
// * 能否跳到位置为i的石头？上一步跳到k，跳了步长j（j可能有多种情况）那么 
//   stones[i] = (stones[k] + j + 1) || (stones[k] + j) || (stones[k] + j - 1)成立的话，就可以跳到
// 这里面存在i，j，k三个变量，那么编程实现时难度较大，后面我就不会了

/* 以下代码并不能运行，可能是我还没真正理解 */

/*
    新位置j in dp[k], 新位置i = 旧位置k + 旧步长j
    if k in dp and i in dp:
        dp[i] = Set[所有满足条件的j]

    stones 为输入数列
    m 为数字的数量

    dp是一个Dict<Int: Set<>>的数据结构
    key是i，i为位置序号
    value为跳到i的跳跃距离集合，所以dp[i][j]存在则代表可以通过最后一步j的跳远距离，跳跃到序号为i的石头

    k标识上一步的位置序号

    var canCross = function (stones) {
        const m = stones.length
        if (m <= 1) return true
        let dp = new Map()
        for (let i in stones) {
            dp.set(i, new Set())
        }
        dp.get(stones[0] + '').add(0)

        for (let i in stones) {
            let cur = stones[i]
            let si = dp.get(cur + '')
            console.log('si', si);
            for (let k of si) {
                console.log('k', k);
                for (j of [k - 1, k, k + 1]) {
                    console.log('j', j);
                    dp.get(cur + j + '')?.add(0)
                }
            }
        }
        console.log(dp);
    };
    canCross(input)
*/