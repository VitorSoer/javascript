// If Else statement
const hero = 'Batman';

if (hero === 'Batman') {
  console.log(hero);
} else {
  console.log('Try again...');
}

// Else if
if (hero === 'Homelander') {
  console.log('RUUUNNNN!');
} else if (hero === 'Black Panther') {
  console.log('Wakanda Forever');
} else {
  console.log('Not today...');
}

// Ternary conditional operator
const whoIsTheHero = hero === 'Flash' ? hero : 'Try again...';
console.log(whoIsTheHero);
