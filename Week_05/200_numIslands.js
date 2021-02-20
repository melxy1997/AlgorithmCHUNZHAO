/**
 * 200. 岛屿数量
 * https://leetcode-cn.com/problems/number-of-islands/
 */
// 这时候就发现前面学的还是有纰漏
var numIslands = function (grid) {
    let res = 0
    const rows = grid.length, cols = grid[0].length
    if (rows == 0) return 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                diffuse(grid, i, j, rows, cols)
                res += 1
            }
        }
    }

    let diffuse = (grid, i, j, rows, cols) => {
        // termin. and bound.
        // 注意！这个逻辑运算有顺序的 必须在左侧先判断不越界，最右边再判断是否为'0'，
        // 不然-1进来grid[-1][0]直接报错了 
        if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') {
            return
        }
        // process right level
        grid[i][j] = '0'
        // drill down
        diffuse(grid, i + 1, j, rows, cols)
        diffuse(grid, i - 1, j, rows, cols)
        diffuse(grid, i, j + 1, rows, cols)
        diffuse(grid, i, j - 1, rows, cols)
    }

    return res
};
