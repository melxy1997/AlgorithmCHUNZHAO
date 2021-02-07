var canJump = function(nums) { 
    // 一个能够体现游戏机制的解法
    let energy = 0
    for (let i in nums) {
        // 通过max来决定 是继续消耗上一步的能量 还是在当前位置落下来更新能量
        energy = Math.max(energy-1, nums[i]) 
        // 能量耗尽且没到终点
        if (energy <= 0 && i < nums.length-1) {
            return false
        }
    }
    return true
};