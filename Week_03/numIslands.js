
var numIslands = function (grid) {
    let res = 0
    const rows = grid.length
    if (rows === 0) { return 0 } // 加一个判空提前退出
    const cols = grid[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                diffuse(grid, rows, cols, i, j)
                res += 1
            }
        }
    }
    return res
};
// 岛屿问题先人结论：扩散染色 省去visited记录
const diffuse = (grid, rows, cols, i, j) => {
    // 注意避免越界
    let is_out = i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0'
    if (is_out) { return }
    grid[i][j] = '0'
    diffuse(grid, rows, cols, i + 1, j)
    diffuse(grid, rows, cols, i - 1, j)
    diffuse(grid, rows, cols, i, j + 1)
    diffuse(grid, rows, cols, i, j - 1)
}


/**
 * 200. 岛屿数量
 * https://leetcode-cn.com/problems/number-of-islands/
 */

var numIslands = function (grid) {
    let res = 0
    const rows = grid.length, cols = grid[0].length
    if (rows == 0) return 0

    let diffuse = (grid, i, j, rows, cols) => {
        // termin. and bound.
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

    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            if (grid[i][j] === '1') {
                diffuse(grid, i, j, rows, cols)
                res += 1
            }
        }
    }

    return res
};
