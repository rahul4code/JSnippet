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

  //  Prepend node in linkedList
  //  Time complexity -> O(1)
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

  // Inserting value from last
  // Time complexity -> O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Index is invalid");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
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

      this.size++;
    }
  }
}

const LL = new LinkedList();
console.log(LL.getSize());
LL.prepend(10);
console.log(LL.getSize());
LL.prepend(20);
console.log(LL.print(), "These are the values");
LL.append(100);
console.log(LL.print(), "After append");
LL.insert(50, 2);
console.log(LL.print());
