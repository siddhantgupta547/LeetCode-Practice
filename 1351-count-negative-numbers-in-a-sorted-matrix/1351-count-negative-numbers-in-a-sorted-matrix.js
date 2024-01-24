/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    let row = rows - 1;
    let col = 0;

    while (row >= 0 && col < cols) {
        if (grid[row][col] < 0) {
            count += cols - col;
            row--;
        } else {
            col++;
        }
    }

    return count;
};