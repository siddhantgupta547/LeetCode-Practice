/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1String=''
    let l2String=''
    let head1=l1
    let head2=l2
    let longer;
    let shorter;
    while(head1!==null){
        l1String+=head1.val
        head1=head1.next
    }
    while(head2!==null){
        l2String+=head2.val
        head2=head2.next
    }
    if(l1String.length>l2String.length){
        longer=l1String
        shorter=l2String
    }else{
        longer=l2String
        shorter=l1String
    }
    let carry=0
    let i=0
    let j=0
    let result=''
    while(i<longer.length){
        let sum;
        if(shorter[i]){
           sum=Number(longer[i])+Number(shorter[j])+carry
        }else{
            sum=Number(longer[i])+carry
        }
        let toBeAdded=sum
        if(sum>9){
            carry=1
            toBeAdded=sum%10
        }else{
            carry=0
        }
        result+=toBeAdded
        i++
        j++
    }
    if(carry){
        result+=carry
    }
    let head=null
    let current=null
    for(let i=0;i<result.length;i++){
        let value=Number(result[i])
        if(!head){
            head=new ListNode(value)
            current=head
        }else{
            current.next=new ListNode(value)
            current=current.next
        }
    }
    return head
};