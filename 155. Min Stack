struct Node {
    int val;
    int minVal;
    Node *next;
    Node() : val(0), next(nullptr) {}
    Node(int x,int y) : val(x),minVal(y), next(nullptr) {}
    Node(int x,int y, Node *next) : val(x),minVal(y), next(next) {}
};
class MinStack {
    Node *head;
public:
    MinStack() {
        head = nullptr;
    }
    void push(int val) {
        if (head == nullptr){
            head = new Node (val,val);
        }
        else {
            int minVal=min(val,head->minVal);
            Node* newNode = new Node (val,minVal);
            newNode->next = head ;
            head =newNode;
        }
    }
    
    void pop() {

        Node* temp = head;
        head=head->next;
        temp=nullptr;
        
    }
    
    int top() {
        return head->val;
    }
    
    int getMin() {
        return head->minVal; 
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
