// Simple array
let animals = [' Lion', ' Panda', ' Tiger'];
console.log(`Array: ${animals}`);

// Add an element to the end
animals.push(' Elephant');
console.log(`Push: ${animals}`);

// Remove last element
animals.pop();
console.log(`Pop: ${animals}`);

// Removes the first element
console.log(`Shift: ${animals.shift()}`);

// Inserts the given values at the beginning and returns the length
animals.unshift(' Eagle');
console.log(`Unshift: ${animals}`);

// Show or use the array length
console.log(`Length: ${animals.length}`);

// Combine two or more arrays
let newAnimals = [' Monkey', ' Cobra'];
console.log(`Concat: ${animals.concat(newAnimals)}`);

// Just remove or remove and insert a new value
animals.splice(0, 2, ' Red Panda', ' Shark');
console.log(`Splice: ${animals}`);

// Returns a shallow copy of a portion of an array
console.log(`Splice: ${animals.slice(0, 1)}`);

// Reverses the elements in an array
console.log(`Reverse: ${animals.reverse()}`);
