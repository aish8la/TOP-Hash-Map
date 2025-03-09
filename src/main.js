import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";
import { HashSet } from "./hash-set.js";
import { LinkedList } from "./linked-list.js";

const hash = new HashMap(KeyedLinkedList);
const test = new HashSet(LinkedList);

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log("length :", test.length())
// console.log("capacity :", test.capacity)
// console.log("current Load :",test.currentLoad());

// test.set('newKey', 'New Value')

// console.log("length :", test.length())
// console.log("capacity :", test.capacity)
// console.log("current Load :",test.currentLoad());

// console.log("entries :", test.entries())

// console.log("length :", test.length())
// console.log("capacity :", test.capacity)
// console.log("current Load :",test.currentLoad());



test.set('apple')
test.set('banana')
test.set('carrot')
test.set('dog')
test.set('elephant')
test.set('frog')
test.set('grape')
test.set('hat',)
test.set('ice cream')
test.set('jacket')
test.set('kite')
test.set('lion')

console.log("length :", test.length())
console.log("capacity :", test.capacity)
console.log("current Load :",test.currentLoad());

test.set('newKey')

console.log("length :", test.length())
console.log("capacity :", test.capacity)
console.log("current Load :",test.currentLoad());
