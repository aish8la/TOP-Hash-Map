class KeyedNode {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class KeyedLinkedList {
  #head = null;
  #tail = null;

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  createNode(key, value, nextNode) {
    return new KeyedNode(key, value, nextNode);
  }

  append(key, value) {
    const newNode = this.createNode(key, value, null);
    if (this.#tail === null) {
      this.#head = this.#tail = newNode;
    } else {
      this.#tail.nextNode = newNode;
      this.#tail = newNode;
    }
  }

  prepend(key, value) {
    const newNode = this.createNode(key, value, this.#head);
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

    //Iterates until next node is tail node
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
      string += `( ${currentNode.key}: ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (string += "null");
  }

  insertAt(key, value, index) {
    //If index is start of list call prepend
    if (index === 0) {
      this.prepend(key, value);
      return;
    }

    let size = this.size();

    //If index exceeds index of last existing node returns without modifying the list
    if (index > size - 1) return;

    let targetNode = this.#head;
    let prevNode = null;

    let i = 0;

    //iterates over the list until the desired index is reached and records the existing node at the desired index and the node before it
    while (index > i) {
      prevNode = targetNode;
      targetNode = targetNode.nextNode;
      i++;
    }

    //once the desired index is reached modifies the next of the node before the existing node to point to a new node with given value and sets it's next to point to the existing node at the desired index.
    prevNode.nextNode = this.createNode(key, value, targetNode);
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
