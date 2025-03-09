class Node {
    constructor(key = null, nextNode = null) {
      this.key = key;
      this.nextNode = nextNode;
    }
}

export class LinkedList {
    #head = null;
    #tail = null;
  
    get head() {
      return this.#head;
    }
  
    get tail() {
      return this.#tail;
    }
  
    createNode(key, nextNode) {
      return new Node(key, nextNode);
    }
  
    append(key) {
      const newNode = this.createNode(key, null);
      if (this.#tail === null) {
        this.#head = this.#tail = newNode;
      } else {
        this.#tail.nextNode = newNode;
        this.#tail = newNode;
      }
    }
  
    prepend(key) {
      const newNode = this.createNode(key, this.#head);
      if (this.#head === null) {
        this.#head = this.#tail = newNode;
      } else {
        this.#head = newNode;
      }
    }
  
    size() {
      let currentNode = this.#head;
      let count = 0;
  
      while (currentNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
  
      return count;
    }
  
    at(index) {
      if (index > this.size() - 1 || index < 0) return null;
  
      let currentNode = this.#head;
      let i = 0;
  
      while (index > i) {
        currentNode = currentNode.nextNode;
        i++;
      }
  
      return currentNode;
    }
  
    pop() {
      if (this.#head === null) return;
  
      let currentNode = this.#head;
  
      if (currentNode.nextNode === null) {
        this.#head = this.#tail = null;
        return;
      }
  
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
  
      currentNode.nextNode = null;
      this.#tail = currentNode;
    }
  
    contains(key) {
      let currentNode = this.#head;
  
      while (currentNode !== null) {
        if (currentNode.key === key) return true;
        currentNode = currentNode.nextNode;
      }
  
      return false;
    }
  
    find(key) {
      let currentNode = this.#head;
      let index = 0;
  
      while (currentNode !== null) {
        if (currentNode.key === key) return index;
        currentNode = currentNode.nextNode;
        index++;
      }
  
      return null;
    }
  
    toString() {
      let currentNode = this.#head;
      let string = "";
      while (currentNode !== null) {
        string += `( ${currentNode.key} ) -> `;
        currentNode = currentNode.nextNode;
      }
  
      return (string += "null");
    }
  
    findNode(key) {
      let currentNode = this.#head;
      let index = 0;
  
      while (currentNode !== null) {
        if (currentNode.key === key) return currentNode;
        currentNode = currentNode.nextNode;
        index++;
      }
  
      return null;
    }
  
    insertAt(key, index) {
      if (index === 0) {
        this.prepend(key);
        return;
      }
  
      let size = this.size();
  
      if (index > size - 1) return;
  
      let targetNode = this.#head;
      let prevNode = null;
  
      let i = 0;
  
      while (index > i) {
        prevNode = targetNode;
        targetNode = targetNode.nextNode;
        i++;
      }
  
      prevNode.nextNode = this.createNode(key, targetNode);
    }
  
    removeAt(index) {
      let size = this.size();
  
      if (index >= size) return;
  
      if (index === 0) {
        this.#head = this.#head.nextNode;
        return;
      }
  
      if (index === size - 1) {
        this.pop();
        return;
      }
  
      let targetNode = this.#head;
      let prevNode = null;
      let i = 0;
  
      while (index > i) {
        prevNode = targetNode;
        targetNode = targetNode.nextNode;
        i++;
      }
  
      prevNode.nextNode = targetNode.nextNode;
    }
}