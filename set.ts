

// A set is a collection of unique Values. It only store values, no keys and the order which youu used to insert is preserved.

const setOfNumbers = new Set([1,2,2,3,2,4])
console.log(setOfNumbers);
// Set(4) { 1, 2, 3, 4 } numbers 



//add() used to add elemments

setOfNumbers.add(2)
// setOfNumbers.add("string value") // only numbers allowed in a numbers set.

// useful methods
// set(value) = add or update
// has(value) = check if exists
// delete(value) = remove
// size = number of values
// clear() = remove all


// making an array unique wwith set. 

const array: number[] = [1,2,3,4,5,3,2,4,2]

const uniqueNumbers = [...new Set(array)]

console.log(array);
// [1,2,3,4,5,3,2,4,2]
console.log(uniqueNumbers);
//[ 1, 2, 3, 4, 5 ]

