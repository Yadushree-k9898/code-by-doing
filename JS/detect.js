class ListNode{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
function reverseLinkedList(head){
    let prev = null;
    let curr = head;

    while(curr){
        let newNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = newNode;
    }
    return prev
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let reversed = reverseLinkedList(head);
while(reversed){
    console.log(reversed.val);
    reversed = reversed.next
}

function hasCycle(head){
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true
    }
    return false
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);

a.next = b;
b.next = c;
c.next = b

console.log(hasCycle(a));
