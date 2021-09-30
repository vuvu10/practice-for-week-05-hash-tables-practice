# Hash Table Practice Part 4

In this four-part exercise, you will start implementing a hash table that
handles hash collisions with linked list chaining and key collisions by
overwriting values.

## Setup

1. Continue working in the same [starter] as part 1, 2 and 3
2. Run specs with `npm test test/hash-table-pt4-spec.js`

## Part 4: Hash table insert with hash and key collisions

Finally, you will modify your insert function to handle hash collisions with
linked list chaining.

`insertWithHashAndKeyCollisions(key, value)` will create a new
`KeyValuePair()` with the input key and value and store it in the data bucket
location returned by `hashMod(key)`.

If that bucket is already occupied, it will insert the new `KeyValuePair` to
the head of the linked list in the bucket.

If new `KeyValuePair` contains the same `key` as a pair already in the hash
table, the method will overwrite the old `value` with the one from the newly
inserted pair.

Note that the test specs successfully inserts 3 key/value pairs into a hash
table with a capacity of 2. Linked list chaining allows the linked list to
fill past capacity at the cost of performance.

The bucket order of keys is reliant on a valid hash function from part 1.

Read the specs in `test/hash-table-pt4-spec.js` for more details.

[starter]: https://github.com/appacademy-starters/hash-tables-practice