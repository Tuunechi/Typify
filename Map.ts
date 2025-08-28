// A map is a kind of object in javascript .
// It stores key-value pairs and has some unique properties

// Initialisation.

const map = new Map()

// we add items to the map usimg .set() 
// Maps can take any kind of key, funtion, string etc.
map.set(1, "number key")
map.set ("string", "string key")
map.set({id:3}, "object key")


// Map methods============================
// set(key, value) → add or update
// get(key) = retrieve
// has(key) = check if exists
// delete(key) = remove
// size = number of entries
// clear() = remove all


// Using functions as keys is where maps shine as opposed to objects.