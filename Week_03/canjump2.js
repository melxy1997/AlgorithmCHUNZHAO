var jump = function(nums) {
    const n = nums.length
    if (n==1) { return 0 } // 加一个提前判空
    /**
     *  cur：当前跳的活动范围
        nex：下一跳的最远距离
        step：到达最后位置的最少步数
     */
    let [cur, nex, step] = [0,0,0]
    for (let i in nums) {
        if (i > cur) {
            cue = nex
            step += 1
        }
        nex = Math.max(nex, i+ nums[i])
        if (nex >= n-1) {
            return step + 1
        }
    }
};
