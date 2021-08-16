# Hash table practice

In this exercise, you will get started implementing a hash table that handles
collisions with linked list chaining.

## Setup

1. Clone the [starter] from github
2. Install all packages with `npm install`
3. Run specs with `npm test`

## Part 1: Hash table constructor

Start by implementing the constructor for the hash table.

The hash table should count the key/value pairs stored in the table and
contain a data storage array filled with `null` values.

Read the specs in `test/hash-table-spec.js` for more details.

## Part 2: Hash function

In order to test your hash table predictably, you will be implementing a very
simple string hashing function.

`hashTable.hash(key)` takes in a string key and returns the sum of all its
ASCII values.

Example: `hash('ABC')` would add up the ASCII values of `'A'` (65), `'B'` (66)
and `'C'` (67), returning `198`.

Hint: You may find [charCodeAt] useful.

`hashMod(key)` takes in a string key and return the hash modulo the length of
the data array.

Example: `hashMod('ABC')` in a hash table with 10 buckets would return 198
modulo 10, or `8`.

Read the specs in `test/hash-table-spec.js` for more details.

## Part 3: Hash table insert

Next, you will use your hash function to store a key/value pair in your hash
table.

`insert(key, value)` will create a new `KeyValuePair` with the input key and
value and store it in the data bucket returned by `hashMod(key)`.

Read the specs in `test/hash-table-spec.js` for more details.

## Part 4: Hash table insert with collisions

Finally, you will modify your insert function to handle hash collisions with
linked list chaining.

`insert(key, value)` will create a new `KeyValuePair` with the input key and
value and store it in the data bucket returned by `hashMod(key)`. If that
bucket is already occupied, it will insert the new `KeyValuePair` to the head
of the linked list in the bucket.

Read the specs in `test/hash-table-spec.js` for more details.

Note that the test spec inserts 3 key/value pairs into a hash table with a
capacity of 2. Linked list chaining allows the linked list to fill past
capacity, although performance will suffer.

[starter]: https://github.com/appacademy-starters/hash-tables-practice
[charCodeAt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt