class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
};


class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    };

    addValue(value){
        const number = new Node(value);
        if(this.head === null){
            this.head = number;
        } else {
            this.tail.next = number;
        }
        this.tail = number;

    };

    prepend(value){
        const number = new Node(value);
        if(this.head === null){
            this.head = number;
            this.tail = number;
        } else {
            number.next = this.head;
            this.head = number
        }
    }

    print(){
        let node = this.head;
        while(node){
            console.log(`${node.value} `);
            node = node.next;
        };
    };

    reverse (){
      let prev = null;
      let curr = this.head;

      while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
      }
      this.head = prev;
      
    }

};

const list = new linkedList();

list.addValue(10);
list.addValue(20);
list.reverse();
list.prepend(59)
list.print()

