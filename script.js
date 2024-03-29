class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }

  class LinkedList {
    constructor(head) {
      this.head = head;
    }
    prepend(value) {
      const newNode = new Node(value, this.head);
      this.head = newNode;
    }
    append(value) {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
    size() {
      let counter = 0;
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
        counter++;
      }
      return counter;
    }
    getHead() {
      return this.head;
    }
    getTail() {
      let cur = this.head;
      while (cur.nextNode) {
        cur = cur.nextNode;
      }
      return cur;
    }
    at(index) {
      let cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.nextNode;
      }
      return cur;
    }
    pop() {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current = null;
    }
    contains(value) {
      while (this.head.nextNode) {
        if (this.head.value === value) {
          return true;
        }
        this.head = this.head.nextNode;
      }
      return false;
    }
    find(value) {
      let current = this.head;
      while (current.nextNode && current.value !== value) {
        current = current.nextNode;
      }
      return current;
    }
    toString() {
      let string = "";
      let current = this.head;
      while (current.nextNode) {
        string += `(${current.value}) -> `;
        current = current.nextNode;
        if (string.length > 100) throw new Error("Infinite loop, pal.");
      }
      string += `null`;
      return string;
    }
    insertAt(value, index) {
      let cur = this.at(index - 1);
      const newNode = new Node(value, cur.nextNode);
      cur.nextNode = newNode;
    }
    removeAt(index) {
      let cur = this.head;
      console.log(cur);
      let prev = cur;
      let counter = 0;
      while (cur.nextNode) {
        if (counter === index) {
          prev.nextNode = prev.nextNode.nextNode;
          cur.nextNode = null;
          console.log(prev);
          console.log(cur);
          return prev;
        }
        prev = cur;
        cur = cur.nextNode;
        counter++;
      }
    }
  }

  const newLinkedList = new LinkedList(new Node("first"));
  newLinkedList.prepend('new head!')
  newLinkedList.append("second");
  newLinkedList.append("third");
  newLinkedList.append("fourth");
  newLinkedList.append("fifth");
  newLinkedList.append("sixth");
  newLinkedList.pop();
  console.log(newLinkedList.toString());