// - Create empty LL
// - Insert/Prepend LL
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
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
