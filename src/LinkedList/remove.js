export class Remove {
  constructor(linkedList) {
    this.linkedList = linkedList;
  }

  removeItem(index) {
    if (this.linkedList.isEmpty()) {
      console.log("No items to remove");
    } else if (index < 0 || index > this.linkedList.size) {
      console.log("Index out of bounds");
    } else {
      let curr = this.linkedList.head;
      for (let i = 1; i < this.linkedList.size; i++) {
        curr = curr.next;
        if (i === index - 1) {
          let tempNode = curr.next;
          curr.next = tempNode.next;
          return;
        }
      }
    }
  }
}
