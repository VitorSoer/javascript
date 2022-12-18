const poets = [{ poetName: 'allanPoe' }, { poetName: 'bukowski' }];

const poetPhrases = [
  {
    poetName: 'allanPoe',
    phrase: 'I became insane, with long intervals of horrible sanity.',
  },
  {
    poetName: 'bukowski',
    phrase: `I don't hate them...I just feel better when they're not around.`,
  },
  {
    poetName: 'allanPoe',
    phrase: 'Believe nothing you hear, and only one half that you see',
  },
  {
    poetName: 'bukowski',
    phrase: `You have to die a few times before you can really live.`,
  },
];

function printPhrases(poetName) {
  const phrases = poetPhrases
    .filter((poet) => poetName === poet.poetName)
    .map((poet) => `Phrase: ${poet.phrase}}`);

  return console.log(phrases);
}

function checkPoet(poetName) {
  const checkPoet = poets.some((poet) => poet.poetName === poetName);

  if (checkPoet) {
    printPhrases(poetName);
  } else {
    console.log('Try again...');
  }
}

checkPoet('bukowski');
checkPoet('drummond');
