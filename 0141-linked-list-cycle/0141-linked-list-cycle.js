/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const references= new Set()
    let current=head
    while(current!==null){
        if(references.has(current)){
            return true
        }else{
            references.add(current)
            current=current.next
        }
    }
    return false
};
