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
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {

    // First 8 characters of sha256 hash
    const hashHexString = sha256(key).slice(0,8);

    // Convert to int
    return parseInt(`0x${hashHexString}`);
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Find the bucket index
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error('hash collision');
    }
  }

  insert(key, value) {
    // Find the bucket index
    const index = this.hashMod(key);

    let currentPair = this.data[index];
    let lastPair = null;

    while (currentPair && currentPair.key !== key) {
      lastPair = currentPair;
      currentPair = currentPair.next;
    }

    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
    }
  }

}


module.exports = HashTable;