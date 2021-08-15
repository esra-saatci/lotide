# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @esra-saatci/lotide`

**Require it:**

`const _ = require('@esra-saatci/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: asserts whether two values are identical.
* `head(array)`: returns the first element in the array.
* `tail(array)`: returns a new array except the first element of the array.
* `eqArrays(array1, array2)`: returns true if two arrays are identical and false otherwise.
* `assertArraysEqual(actual, expected)`: returns true if two arrays are equal and false otherwise.
* `without(array, itemsToRemove)`: returns only the items from the source array that are not in the itemsToRemove array.
* `flatten(array)`: takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `middle(array)`: takes in an array and returns middle most element of the array.
* `countOnly(array, itemsToCount)`: takes in a collection of items and returns a specific subset of those items.
* `countLetters(string)`: takes in a sentence and returns a count of each of the letters in the sentence.
* `letterPositions(string)`: takes in a string and returns all indices of letter positions in the string.
* `findKeyByValue(object, value)`: takes in an object and a value and returns the first key that corresponds to that value.
* `eqObjects(object1, object2)`: returns true if two objects are equal and false otherwise.
* `assertObjectsEqual(object1, object2)`: asserts whether two objects are identical.
* `map(array, callback)`: returns a new array based on the results of the callback on each item in the array.
* `takeUntil(array, callback)`: returns a slice of the array based on the criteria specified in the callback.
* `findKey(object, callback)`: returns the first key that meets the criteria specified in callback.

