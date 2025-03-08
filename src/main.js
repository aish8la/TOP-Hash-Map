import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

const hashMap = new HashMap(KeyedLinkedList);

// console.log(hashMap.hash("hello"));
hashMap.set("dog", "carlos");
hashMap.set("cat", "megacarlos");
hashMap.set("dog", "newcarlos");
// hashMap.test();