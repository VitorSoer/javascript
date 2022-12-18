// Simple Loop
const animals = ['Tiger', 'Lion', 'Dog'];

for (let index = 0; index < animals.length; index++) {
  const element = animals[index];

  console.log(element);
}

// While
let count = 0;

while (count <= 10) {
  console.log(count);
  count++;
}

// Do While
let reverseCount = 10;

do {
  console.log(reverseCount);
  reverseCount--;
} while (reverseCount >= 0);

// For Each
animals.forEach((animal) => console.log(animal));
