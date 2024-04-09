const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}



class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);


  }

  hash(key) {
    // Your code here
    const hashValue = sha256(key);
    return parseInt(hashValue.slice(0, 8), 16);

  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;

  }

  insertNoCollisions(key, value) {
    // Your code here
    /* Hash table insert with hash collisions*/
    const index = this.hashMod(key);

    if (this.data[index] !== null) {
      throw new Error('Index is already occupied');
    }

    this.data[index] = new KeyValuePair(key, value);
    this.count++;




  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);

    const currentHead = this.data[index];

    const newPair = new KeyValuePair(key, value);

    newPair.next = currentHead;

    this.data[index] = newPair;

    this.count++;




  }

  insert(key, value) {
    // Your code here




  }

}


module.exports = HashTable;
