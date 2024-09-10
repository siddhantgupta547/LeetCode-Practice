/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
        const gcd = (num1, num2) => {
        if(num1 === 0) return num2;

        while(num2) {
            const mod = num1 % num2;
            num1 = num2;
            num2 = mod;
        }

        return num1;
    };

    let prev = head;
    let node = head.next;

    while(node) {
        prev.next = new ListNode(gcd(prev.val, node.val), node);

        prev = node;
        node = node.next;
    }

    return head;
};