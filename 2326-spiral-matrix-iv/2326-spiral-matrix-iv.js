/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
function *spiralIterator (r, c) {
    let row = 0;
    let col = 0;
    
    let topEdge = 0;
    let rightEdge = c - 1;
    let bottomEdge = r - 1;
    let leftEdge = 0;
    
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let thisDir = 0;
    
    
    const rotate = () => { thisDir+= 1; thisDir %= 4; }
    
    while (row >= topEdge && row <= bottomEdge && col >= leftEdge && col <= rightEdge) {
        const rowDirection = directions[thisDir][0];
        const colDirection = directions[thisDir][1];
        
        yield [row, col];
        
        if (colDirection === 1 && col === rightEdge) {
            rotate();
            topEdge++;
        }
        if (rowDirection === 1 && row === bottomEdge) {
            rotate();
            rightEdge--;
        }
        if (colDirection === -1 && col === leftEdge) {
            rotate();
            bottomEdge--;
        }
        
        if (rowDirection === -1 && row === topEdge) {
            rotate();
            leftEdge++;
        }
        
        row += directions[thisDir][0];
        col += directions[thisDir][1];
    }  
}

var spiralMatrix = function(r, c, head) {
    const matrix = Array.from({length: r}, () => {
        return Array.from({length: c});
    });
    
    let current = head;
    
    for (const [row, col] of spiralIterator(r, c)) {
        matrix[row][col] = current?.val ?? -1;
        current = current?.next;
    }
    return matrix;
};