function Node(value){
    this.value = value;
    this.next = null
}
const n1 = new Node(10)
const n2 = new Node(20)
const n3 = new Node(30)

n1.next = n2;
n2.next = n3;

const head = n1;

function printFrom(head){
    let curr = head;
    let out = "";
    while(curr){
        out += curr.value + (curr.next ? " -> ": "");
        curr = curr.next
    }
    console.log(out || "Empty list");
    
}


class Node1{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    append(value){
        const newNode = new Node1(value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
    }
    prepend(value){
        const newNode = new Node1(value);
        if(!this.head){
            this.head = newNode 
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
    }
    printList(){
        let curr = this.head;
        let out = "";
        while(curr){
            out += curr.value + (curr.next ? " -> " : "");
            curr = curr.next
        }
        console.log(out || "Empty list");
        return out
    }
    toArray(){
        const res = [];
        let curr = this.head;
        while(curr){
            res.push(curr.value);
            curr = curr.next
        }
        return res
    }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();   

list.prepend(5);
list.printList();    


console.log(list.toArray());
console.log(list.length);


