// Simple Object
let league = {
  leagueName: 'Serie A',
  numberOfTeams: 12,
};

console.log(
  `League: ${league.leagueName} | Number of Teams: ${league.numberOfTeams}`,
);

// Insert a new key + value
league.lastWinner = 'Deportivo';
console.log(`League: ${league.leagueName} | Last Winner: ${league.lastWinner}`);

// Array of objects
let myTeams = [
  {
    name: 'Milan',
    position: 1,
  },
  {
    name: 'Barcelona',
    position: 2,
  },
  {
    name: 'São Paulo',
    position: 3,
  },
];

console.log(myTeams);
