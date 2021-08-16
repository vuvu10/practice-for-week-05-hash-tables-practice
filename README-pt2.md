# Hash Table Practice Part 2

In this four-part exercise, you will get started implementing a hash table
that handles collisions with linked list chaining.

## Setup

1. Continue working in the same [starter] as part 1
2. Run specs with `npm test test/hash-table-pt2-spec.js`

## Part 2: Hash function

In order to test your hash table predictably, you will be implementing a
hashing function.

`hashTable.hash(key)` takes in a string key and returns the first 8 digits of
its sha256 hash.

Example: `hash('ABC')` will calculate `sha256('ABC')`:

```js
sha256('ABC')
'b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78'
````

The first 8 digits of this hash are `b5d4045c`. Converting from hexadecimal to
decimal results in a return value of `3050570844`.

> Hint: The `sha256` function returns a string containing 64 hexadecimal
> digits. How can you convert the first 8 digits of that string into an
> integer?

`hashMod(key)` takes in a string key and return the hash modulo the length of
the data array.

Example: `hashMod('ABC')` in a hash table with 10 buckets would return
3050570844 modulo 10, or `4`.

Read the specs in `test/hash-table-pt2-spec.js` for more details.


[starter]: https://github.com/appacademy-starters/hash-tables-practice
[charCodeAt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt