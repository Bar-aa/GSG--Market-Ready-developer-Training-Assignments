/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *temp;
        ListNode *curent=head;
        ListNode *prev = head;
        int counter=0;
        int len=0;
        if (head->next==nullptr){
            head=nullptr;
            return head;
        }
        while (curent!=nullptr){
            if (counter>n){
                prev=prev->next;
            }
            curent=curent->next;
            counter++;
            len++;
        }
        if (len==n){
            temp=head;
            head=head->next;
            temp=nullptr;
            return head;
        }
        temp=prev->next;
        prev->next=prev->next->next;
        temp=nullptr;
        return head;
    }
};