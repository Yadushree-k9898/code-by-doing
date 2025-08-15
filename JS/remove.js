class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next; 
    } else {
      current = current.next; 
    }
  }

  return head;
}


let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

let newHead = removeDuplicates(head);


let temp = newHead;
let output = [];
while (temp) {
  output.push(temp.val);
  temp = temp.next;
}
console.log(output.join(" → ")); 


class ListNode1{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


function mergeLists(l1, l2){
    let dummy = new ListNode1(0);
    let current = dummy;

    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next
        } else{
            current.next = l2;
            l2 = l2.next
        }
        current = current.next
    }
    current.next = l1||l2
    return dummy.next
}

let a = new ListNode1(1);
a.next = new ListNode1(3);
a.next.next = new ListNode1(5);

let b = new ListNode1(2);
b.next = new ListNode1(4);
b.next.next = new ListNode1(6);

let merged = mergeLists(a, b);

let temp1 = merged;
let output1 = []
while(temp1){
    output1.push(temp1.val);
    temp1 = temp1.next
}
console.log(output1.join(" -> "));
