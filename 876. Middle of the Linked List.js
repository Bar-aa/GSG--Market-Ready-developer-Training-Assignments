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
var middleNode = function(head) {
    if (!head) return null;
    var fast = head;
    var slow = head;
    while (fast.next!=null && fast.next.next!=null){
        fast = fast.next.next;
        slow=slow.next;
    }
    if (fast.next){
        return slow.next;
    }
    else return slow;
    /*while (fast!=null && fast.next!=null){
        fast = fast.next.next;
        slow=slow.next;
    }
    return slow;*/
};
