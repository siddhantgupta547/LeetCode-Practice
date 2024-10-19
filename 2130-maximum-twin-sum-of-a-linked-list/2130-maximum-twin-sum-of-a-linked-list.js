/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let listArray=[]
    let current=head
    let max=0
    while(current!==null){
        listArray.push(current.val)
        current=current.next
    }
    current=head
    let n=listArray.length
    for(let i=n-1;i>n/2-1;i--){
        const currentSum=current.val+listArray[i]
        if(currentSum>max){
            max=currentSum
        }
        current=current.next
    }
    return max
};