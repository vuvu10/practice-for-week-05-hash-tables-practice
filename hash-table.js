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
    const index = this.hashMod(key);

    let current = this.data[index];

    if (!current) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
      return;
    }

    if (current.key === key) {
      current.value = value;
      return;
    }

    while (current.next) {
      if (current.next.key === key) {
        current.next.value = value;
        return;
      }
      current = current.next;
    }

    const newPair = new KeyValuePair(key, value);
    newPair.next = this.data[index];
    this.data[index] = newPair;
    this.count++;

}

  get(key) {
    // Your code here
    const index = this.hashMod(key);

    let current = this.data[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null;

  }

  delete(key) {
    // Your code here
    const index = this.hashMod(key);

    let current = this.data[index];

    if (!current) {
      return null;
    }

    if (current.key === key) {
      this.data[index] = current.next;
      this.count--;
      return current.value;
    }

    while (current.next) {
      if (current.next.key === key) {
        const value = current.next.value;
        current.next = current.next.next;
        this.count--;
        return value;
      }
      current = current.next;
    }

    return null;

  }

  loadFactor() {
    // Your code here
    return this.count / this.capacity;
  }

  resize() {
    // Your code here
    const oldData = this.data;
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    for (const pair of oldData) {
      let current = pair;
      while (current) {
        this.insert(current.key, current.value);
        current = current.next;
      }
    }

  }

}






module.exports = HashTable;
