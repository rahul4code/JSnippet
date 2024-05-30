// - Create empty LL
// - Insert/Prepend LL
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //   Prepend node in linkedList
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Printing of LL values using curr variable
  print() {
    let listValues = "";
    if (this.isEmpty()) {
      listValues = "List is empty";
    } else {
      let curr = this.head;
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
    }
    return listValues;
  }
}

const LL = new LinkedList();
console.log(LL.getSize());
LL.prepend(10);
console.log(LL.getSize());
LL.prepend(20);
console.log(LL.print(), "These are the values");
