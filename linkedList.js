class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let node2Remove = this.head;
        this.head = node2Remove.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return node2Remove;
    }

    unShift(val) {
        let newHeadNode = new Node(val);
        if (!this.head) {
            this.head = newHeadNode;
            this.tail = this.head;
        } else {
            newHeadNode.next = this.head;
            this.head = newHeadNode
        }
        this.length++;
        return this;
    }

    get(index) {
        let pointer = 0;
        let currentNode = this.head
        while (pointer < index) {
            currentNode = currentNode.next
            pointer++;
        }
        if (pointer === index) {
            return currentNode
        }
        else return null;
    }

    set(index, val) {
        //set the value of the node on the given index
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unShift(val);
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let node2Replace = prevNode.next;
        prevNode.next = newNode;
        newNode.next = node2Replace;
        this.length++;
        return !!this;
    }

    remove(index) {
        if (index === 0) return !!this.shift();
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.pop();
        this.get(index - 1).next = this.get(index + 1)
        this.length--;
        return true;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    toString() {
        let currentNode = this.head
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next
        }
    }
}

let list = new LinkedList();
list.push("Hello");
list.push("Guru");
list.push("!!");
list.push("Fuck");
list.push("You");
// list.insert(3, "string");
list.reverse()
// console.log(list.get(3))
list.toString();