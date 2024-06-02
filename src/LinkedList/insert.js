import { Node } from "./linkedList.js";

export class Insert {
  constructor(linkedList) {
    this.linkedList = linkedList;
  }

  //  Prepend node in linkedList
  //  Time complexity -> O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.linkedList.isEmpty()) {
      this.linkedList.head = node;
    } else {
      node.next = this.linkedList.head;
      this.linkedList.head = node;
    }
    this.linkedList.size++;
  }

  // Inserting value from last
  // Time complexity -> O(n)
  append(value) {
    const node = new Node(value);
    if (this.linkedList.isEmpty()) {
      this.linkedList.head = node;
    } else {
      let prev = this.linkedList.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.linkedList.size++;
  }

  // Insertion at given index
  insertAtIndex(value, index) {
    if (index < 0 || index > this.linkedList.size) {
      console.log("Index is invalid");
      return;
    }
    if (index === 0) {
      this.linkedList.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.linkedList.head;
      let count = 0;
      while (prev) {
        prev = prev.next;
        count++;
        if (count == index - 1) {
          node.next = prev.next;
          prev.next = node;
          return;
        }
      }
      this.linkedList.size++;
    }
  }
}
