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
    let slow = head;
    let fast = head;
    
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    
    let prev = null;
    while (slow !== null) {
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    
    
    let maxSum = 0;
    let start = head;
    while (prev !== null) {
        maxSum = Math.max(maxSum, start.val + prev.val);
        start = start.next;
        prev = prev.next;
    }
    
    return maxSum;
};
