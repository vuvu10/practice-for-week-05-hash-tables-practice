# Hash Table Practice Part 4

In this four-part exercise, you will get started implementing a hash table
that handles collisions with linked list chaining.

## Setup

1. Continue working in the same [starter] as part 1, 2 and 3
2. Run specs with `npm test test/hash-table-pt4-spec.js`

## Part 4: Hash table insert with collisions

Finally, you will modify your insert function to handle hash collisions with
linked list chaining.

`insert(key, value)` will create a new `KeyValuePair` with the input key and
value and store it in the data bucket returned by `hashMod(key)`. If that
bucket is already occupied, it will insert the new `KeyValuePair` to the head
of the linked list in the bucket.

Read the specs in `test/hash-table-pt4-spec.js` for more details.

Note that the test spec inserts 3 key/value pairs into a hash table with a
capacity of 2. Linked list chaining allows the linked list to fill past
capacity, although performance will suffer.

The bucket order of keys is reliant on a valid hash function from part 2.

[starter]: https://github.com/appacademy-starters/hash-tables-practice