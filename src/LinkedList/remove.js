export class Remove {
  constructor(linkedList) {
    this.linkedList = linkedList;
  }

  removeItem(index) {
    if (index < 0 || index > this.linkedList.size) {
      console.log("Index out of bounds");
    } else {
      if (index === 0) {
        let removedNode = this.linkedList.head;
        this.linkedList.head = removedNode.next;
      } else {
        let curr = this.linkedList.head;
        for (let i = 0; i < index - 1; i++) {
          curr = curr.next;
        }
        let removedNode = curr.next;
        curr.next = removedNode.next;
      }
      this.linkedList.size--;
    }
  }
}
