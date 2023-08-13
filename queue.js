class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
      this.head = null;
      this.tail = null
    };

    enqueue(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node;
        } else {
             this.tail.next = node;
        }
        this.tail = node;
    };

    dequeue () {
        this.head = this.head.next;
    };

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr= curr.next;
        }
    }

  
};

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
