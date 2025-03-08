import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

const hashMap = new HashMap(KeyedLinkedList);

hashMap.test();
console.log("count :", hashMap.length());
console.log(hashMap.hash("dog"));
hashMap.set("dog", "carlos");
hashMap.set("cat", "megacarlos");
console.log("has : ", hashMap.has("dog"));
hashMap.set("dog", "newcarlos");
console.log("has : ", hashMap.has("dog"));
console.log("remove moon :", hashMap.remove("moon"));
hashMap.test();
console.log("get : ", hashMap.get("dog"));
console.log("count :", hashMap.length());
hashMap.clear();
hashMap.test();
console.log("count :", hashMap.length());


