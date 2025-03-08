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
            console.error("Key can only be of type string!");
            return false;
        }

        return true;
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

    test() {
        console.log(this.#hashMap);
    }
}