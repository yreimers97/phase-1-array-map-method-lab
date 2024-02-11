const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((aC) => {
    const arrayCaps = aC.split(" ")
    const caps = arrayCaps.map(
      (firstLetter) => firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1)
    );
    const update = caps.join(" ")
    return update
  });
};
