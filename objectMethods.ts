import {appConfig} from "./data"



const user:{} = {
    id: 1,
    name: "Alice",
    age: 25,
    active: true,
    skills: ["React", "Node.js"],
    address: { city: "London", country: "UK" }
}


const user2:{} ={
    id: 2,
    name:"faruq",
}
//Object.keys() used to get an array of the keys of an object
const keys = Object.keys(user)
console.log(keys);
// [ 'id', 'name', 'age', 'active', 'skills', 'address' ]



//Object.value() used to get an arrary of values from an object.
const values = Object.values(user)
console.log(values)
// [1, 'Alice', 25, true, [ 'React', 'Node.js' ], { city: 'London', country: 'UK'  ]


//Object.entries

const entries = Object.entries(user)
console.log(entries + "from entries");
// id,1,name,Alice,age,25,active,true,skills,React,Node.js,address,[object Object]from entries

const reversedEntries = Object.fromEntries(entries)
console.log(reversedEntries);

//object.assign() Copies properties from a source object to a target object. This can be used where there is a default for a user or something that will just assign the default to the new. 
// maybe when signing a user in and you just want to collect some details and help them fill others.
const ReassignUser = Object.assign(user, user2)
console.log(ReassignUser);
// {id: 2,name: 'faruq',age: 25,active: true,skills: [ 'React', 'Node.js' ], address: { city: 'London', country: 'UK' }


// Object.hasOwn() → check if property exists on the object. Returns true if it does n false on vice.


// console.log(Object.hasOwn(user2, "age"));
// Expected output: false


