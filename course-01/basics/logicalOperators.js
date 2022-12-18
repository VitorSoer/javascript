// Logical Operators: Or, and not
const monday = true;
const weekend = true;
const workDay = false;

// Not operator: !
let isMonday = !monday ? `It's not Monday` : 'Monday';
console.log(isMonday);

// And operator: &&
let iNeedToWork = monday && workDay ? 'Yes' : 'No';
console.log(iNeedToWork);

// Or operator: ||
let dayOff = weekend || !workDay ? 'Yes' : 'No';
console.log(dayOff);
