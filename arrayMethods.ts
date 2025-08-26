// import users, {appConfig} from "./data";


// .map() transforms each elements and produces a new array with each of the elements modified, depends on the implementation.

const numbers : number[] = [1,2,3,4,5,6,7,8,9,10]
const letters : string[] = ["a", "b", "c", "d", "e","f","g","h","i","j"]
const vowels: string[] = ["a", "e", "i", "o", "u"] 
const names : string[] = ["John", "Jane", "Doe", "Smith", "Emily", "Michael", "Sarah", "David", "Laura", "James"]


const multiply = numbers.map((number, Index:number) => { 
    return number * 2 
}) 
console.log(multiply)
//[ 4, 8, 12, 16, 20 ]



// forEach does a particular action once for each of the element,
//dosent neccesarily produce or return a new array and as such a console.log of the variable will return undefined!

const increase = numbers.forEach((number) =>{
    console.log(number * 2)
})
//returns each element modified.
// 4
// 8
// 12
// 16
// 20


// filter: returns an array (a shallow copy of the original array) that meets a certain criteria 
const evenNumbers = numbers.filter((number) =>{
    if (number % 2 === 0){
        return number + "This is from the filter."
    }
}
)

console.log(evenNumbers + "This is from filter")
// 2,4,6,8,10This is from filter


// .reduce() sums or brings all the elements in the array to one value. Takes in initial value

const initialValue:number = 0
const sumUp = numbers.reduce((accumulator, currentValue) => accumulator + currentValue ,initialValue
)

console.log(sumUp);
//55

// .find() returns the first element that matches a condition from a testing function. If no match it returns undefined.

const findFirstOdd = numbers.find((number)=>
    number % 2 > 0
)

console.log(findFirstOdd + "from find")


//.findIndex() returns the index of the first element that matches a condition from a testing function. If no match it returns -1.

const findFirstOddIndex = numbers.findIndex((number)=>
    number % 2 > 0
)

console.log(findFirstOddIndex + " from find index")
//0 from findIndex


//.includes() checks if an array includes a certain value among its entries, and returns true or false.

const findletter = letters.includes("z")
console.log(findletter);
//false


//.some() test if atleast one of the elements in the array passes the test implemented by the provide function. Returns a truthy value for those that passed.


const getVowels = letters.filter(letter => vowels.some(vowel => vowel.includes(letter)))
// [ 'a', 'e', 'i' ]
console.log(getVowels)


// .every() test if all the elements in the array passes the test by the function. so it checks for falsy values. once it sees one, it taps out.

const isAllNumber = letters.every( letter => Number(letter))
// false
console.log(isAllNumber);



//.slice() cuts an array using start and end params as input index from where to cut from. It returns instance of a shallow copy.

const chopFirstThree = names.slice(3)
console.log(chopFirstThree);
// ['Smith', 'Emily','Michael', 'Sarah', 'David', 'Laura','James']


//.sort() the action is performed in place (no shallow copy is created)and returns the refrence to the same now sorted array. so to sort without mutating original array use toSorted()
// remember that (a, b) => a - b sorts numbers in ascending order.

const sortedNames = names.sort()
console.log(sortedNames);
// ['David', 'Doe','Emily', 'James', 'Jane',  'John','Laura', 'Michael','Sarah', 'Smith]



//.splice() to modify the array in place. adds or replaces an element in a particular index. toSpliced() can create a shallow copy. 
names.splice(1, 0, "Emmanuel")
// 1 = Index to put the, 0 = how many items to remove, "Emmanuel" = value to add.
console.log(names);


//.join() joins all elements of an array into a string. takes in a separator as an argument.

const stringify = names.join()
console.log(stringify);
//David,Emmanuel,Doe,Emily,James,Jane,John,Laura,Michael,Sarah,Smith

const hyphenise = names.join("-")
console.log(hyphenise);
//David-Emmanuel-Doe-Emily-James-Jane-John-Laura-Michael-Sarah-Smith

