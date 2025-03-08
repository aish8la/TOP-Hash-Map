import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

const test = new HashMap(KeyedLinkedList);

// test.test();
// console.log("count :", test.length());
// console.log(test.hash("dog"));
// test.set("dog", "carlos");
// test.set("cat", "megacarlos");
// console.log("has : ", test.has("dog"));
// test.set("dog", "newcarlos");
// console.log("has : ", test.has("dog"));
// console.log("remove moon :", test.remove("moon"));
// test.test();
// console.log("get : ", test.get("dog"));
// console.log("count :", test.length());
// console.log(test.entries());
// test.clear();
// console.log(test.entries());
// // test.test();
// // console.log("count :", test.length());

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.test();
console.log("length :", test.length())
console.log("current Load :",test.currentLoad());

test.set('lion', 'black')
test.set('ice cream', 'blue')
test.set('jacket', 'green')

test.test();
console.log("length :", test.length())
console.log("current Load :",test.currentLoad());
