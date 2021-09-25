export const capitalize: (word: string) => string = (word) => {
  const wordUnderscore = word.toLowerCase();
  const firstLetter = wordUnderscore[0].toUpperCase();
  const restOfWord = wordUnderscore.slice(1);

  return `${firstLetter}${restOfWord}`;
}
