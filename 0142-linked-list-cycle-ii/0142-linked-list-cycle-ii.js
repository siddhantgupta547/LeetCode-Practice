/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set= new Set()
    let current = head
    while(current){
        if(set.has(current)){
            return current
        }
        set.add(current)
        current=current.next
    }
    return null
};