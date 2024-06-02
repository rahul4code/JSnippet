import LinkedList from "./linkedList.js";
import { Insert } from "./insert.js";
import { Remove } from "./remove.js";

const linkedList = new LinkedList();
const insert = new Insert(linkedList);
const remove = new Remove(linkedList);

// Insertion
console.log(linkedList.getSize(), "Initial Size");
insert.prepend(10);
insert.prepend(20);
console.log(linkedList.print(), "Prepend Insertion");
insert.append(100);
console.log(linkedList.print(), "Append Insertion");
insert.insertAtIndex(50, 2);
console.log(linkedList.print(), "Inserted 50 at given index 2");
// Deletion
remove.removeItem(2);
console.log(linkedList.print(), "removed node from index 2");
