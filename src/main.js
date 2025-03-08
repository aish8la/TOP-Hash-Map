import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

const hashMap = new HashMap(KeyedLinkedList);

console.log(hashMap.hash("dog"));
hashMap.set("null", "carlos");
console.log("null : ", hashMap.get("null"));
hashMap.set("cat", "megacarlos");
hashMap.set("dog", "newcarlos");
// hashMap.test();
console.log("get : ", hashMap.get("moon"));