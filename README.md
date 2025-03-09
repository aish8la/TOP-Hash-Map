# HashMap Implementation in JavaScript

## Overview
This project implements a **HashMap** (hash table) in JavaScript using **separate chaining** for collision handling. It leverages a **Keyed Linked List** to store key-value pairs within each bucket.

## Features
- Supports standard HashMap operations:
  - `set(key, value)`: Inserts or updates a key-value pair.
  - `get(key)`: Retrieves a value by key.
  - `has(key)`: Checks if a key exists.
  - `remove(key)`: Deletes a key-value pair.
  - `keys()`: Returns an array of all keys.
  - `values()`: Returns an array of all values.
  - `entries()`: Returns an array of key-value pairs.
  - `clear()`: Removes all elements from the HashMap.
  - `length()`: Returns the number of stored key-value pairs.
  - `test()`: Prints the structure of the hashmap for debugging.
- **Uses separate chaining** via a custom **Keyed Linked List**.
- **Resizes dynamically** when load factor exceeds `0.75`.
- Encapsulated with **private class fields** for security and integrity.

## Implementation Details
### **1. Hashing Function**
- Uses a **prime number (31)** for better distribution.
- Maps a string key to an index within the array capacity.

```js
hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }
    return hashCode;
}
```

### **2. Separate Chaining with Keyed Linked List**
Each bucket in the hash table is a **KeyedLinkedList**, which stores nodes containing `key` and `value`. This allows handling of hash collisions efficiently.

```js
class KeyedNode {
  constructor(key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}
```

### **3. Dynamic Resizing**
- If the **load factor** (`length / capacity`) exceeds `0.75`, the capacity **doubles**, and all entries are **rehashed**.
- This ensures that the HashMap remains efficient even with large data volumes.

## Usage
### **1. Import the Classes**
```js
import { HashMap } from './hash-map.js';
import { KeyedLinkedList } from './keyed-linked-list.js';
```

### **2. Create a HashMap Instance**
```js
const hashMap = new HashMap(KeyedLinkedList);
```

### **3. Add Key-Value Pairs**
```js
hashMap.set("name", "Alice");
hashMap.set("age", 25);
```

### **4. Retrieve Values**
```js
console.log(hashMap.get("name")); // Output: Alice
console.log(hashMap.has("age")); // Output: true
```

### **5. Remove a Key**
```js
hashMap.remove("name");
console.log(hashMap.get("name")); // Output: null
```

### **6. Get All Keys, Values, or Entries**
```js
console.log(hashMap.keys());   // Output: ["age"]
console.log(hashMap.values()); // Output: [25]
console.log(hashMap.entries());// Output: [["age", 25]]
```

### **7. Clear the HashMap**
```js
hashMap.clear();
console.log(hashMap.length()); // Output: 0
```

## Performance
- **Average time complexity:**
  - `set()`, `get()`, `has()`, `remove()` → **O(1)** (in the best case, with uniform distribution)
  - Worst case for operations is **O(n)** if all keys hash to the same bucket (unlikely with a good hash function)
- **Resizing cost:**
  - **O(n)** due to rehashing when resizing

## Conclusion
This HashMap implementation is a flexible, efficient, and scalable data structure that effectively handles key-value storage with dynamic resizing and collision resolution using linked lists.

---