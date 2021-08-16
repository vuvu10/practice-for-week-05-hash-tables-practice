# Hash Table Practice Part 3

In this four-part exercise, you will get started implementing a hash table
that handles collisions with linked list chaining.

## Setup

1. Continue working in the same [starter] as part 1 and 2
2. Run specs with `npm test test/hash-table-pt3-spec.js`

## Part 3: Hash table insert

Next, you will use your hash function from part 2 to store a key/value pair in
your hash table.

`insert(key, value)` will create a new `KeyValuePair` with the input key and
value and store it in the data bucket returned by `hashMod(key)`.

Read the specs in `test/hash-table-pt3-spec.js` for more details.


[starter]: https://github.com/appacademy-starters/hash-tables-practice