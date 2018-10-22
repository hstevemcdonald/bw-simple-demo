let words = [];

const add = payload => {
  if (payload && payload.words) {
    payload.words = payload.words
      .replace(/[^\w\s]/g, '')
      .replace(/[ ]{2,}/g, '');
    let wordStack = {};
    payload.words.split(' ').forEach(word => {
      word = word.trim();
      if (!wordStack[word.toLowerCase()]) {
        wordStack[word.toLowerCase()] = 1;
        return;
      }
      wordStack[word.toLowerCase()]++;
    });
    let returnStack = [];
    for (w in wordStack) {
      returnStack.push({ word: w, count: wordStack[w] });
    }

    words = { words: returnStack };
  }
  return words;
};

module.exports = {
  add
};
