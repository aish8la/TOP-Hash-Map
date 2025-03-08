import { HashMap } from "./hash-map.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

const hashMap = new HashMap(KeyedLinkedList);

console.log(hashMap.hash("hello"));
hashMap.test();

set(key, value) {
    if (!this.validateKey(key)) return;
    

    
}

test() {
    console.log(this.#hashMap);
}

createHashMapArr(length) {
    this.#hashMap = Array.from( {length : this.#capacity }, () => new this.#linkedListClass());
}

this.createHashMapArr(this.#capacity);