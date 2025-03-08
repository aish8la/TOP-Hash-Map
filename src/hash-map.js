export class HashMap {

    constructor(linkedListClass) {
        this.#linkedListClass = linkedListClass;
        this.createHashMapArr(this.#capacity);
    }

    #linkedListClass;
    #capacity = 16;
    #loadFactor = 0.75;
    #hashMap;

    createHashMapArr(arrLength) {
        this.#hashMap = Array.from( {length : arrLength }, () => new this.#linkedListClass());
    }

    validateKey(key) {
        if(typeof key !== "string") {
            throw new Error("Key can only be of type string!");
        }

        return true;
    }

    validateIndex(index) {
        if (index < 0 || index >= this.#capacity) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    hash(key) {

        if (!this.validateKey(key)) return null;

        let hashCode = 0;
        const primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
        }

        return hashCode;
    }

    bucket(key) {

        const index = this.hash(key);
        this.validateIndex(index);
        return this.#hashMap[index]
    }

    set(key, value) {
        const currentBucket = this.bucket(key);
        const node = currentBucket.findNode(key);

        if (node === null) {
            currentBucket.append(key, value);
            return;
        }
        node.value = value;
    }

    get(key) {
        const bucket = this.bucket(key);
        const node = bucket.findNode(key);

        if(node === null) return null;
        return node.value;
    }

    has(key) {
        const bucket = this.bucket(key);
        return bucket.contains(key);
    }

    test() {
        for(let i = 0; i < this.#capacity; i++) {
            console.log(`[${i}] : `,this.#hashMap[i].toString());
        }
    }
}