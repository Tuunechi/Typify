import {appConfig} from "./data"



const user:{} = {
    id: 1,
    name: "Alice",
    age: 25,
    active: true,
    skills: ["React", "Node.js"],
    address: { city: "London", country: "UK" }
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
console.log(reversedEntries + "reversed");
