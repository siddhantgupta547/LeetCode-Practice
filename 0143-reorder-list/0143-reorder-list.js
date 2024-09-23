/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let current=head
    const addresses=[]
    while(current){
        addresses.push(current)
        current=current.next
    }
    current=head
    let j=addresses.length-1
    let insert=true
    let till=Math.floor(addresses.length/2)
    while(current && j>=till){
        if(insert){
            let temp=current.next
            current.next=addresses[j--]
            current=current.next
            if(current)
                current.next=temp
            insert=false
        }else{
            insert=true
            current=current.next
        }
    }
    current.next=null
};