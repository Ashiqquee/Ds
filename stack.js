///---------Stack In LinkedList---------///

class Node {
    constructor(value){
        this.value = value;
        this.next = null ;
    }
};

class linkedStack {
    constructor() {
        this.top = null;
        this.size = 0;
    };

    push(value){
        const node = new Node(value);

        if(!this.top){
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.size++;
    };

    pop(){
        this.top = this.top.next;
        this.size--;
    };

  

    print(){
        let curr = this.top;

        while(curr){
            console.log(curr.value.toString());
            curr = curr.next;
        }
    }
};

const newStack = new linkedStack();

newStack.push(10);

newStack.push(20);

newStack.push(30);

newStack.print();

newStack.print();















///---------Stack In Array---------///



class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    };

    push(element) {
        this.items[this.size] = element;
        this.size++;
    };

    pop() {
        let deleted = this.items[this.size - 1];
        delete this.items[this.size - 1];
        this.size--;
        return deleted;
    };


    reverse() {
        let arr = [];

        for (let i = 0; i < this.size; i++) {
            
            arr.push(this.pop());
            this.size--;
            i--;
        }
    }

    print() {
        console.log(this.items.toString());
    };
}

const stack = new Stack();



stack.push(10);

stack.push(20);

stack.push(30);

stack.reverse();

stack.print();
