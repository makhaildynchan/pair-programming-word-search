const transpose = (letters) => {
  let verticalLetters = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalLetters.push([]);
  }
  for (let j = 0; j < letters.length; j++) {
    for (let k = 0; k < letters[j].length; k++) {
      verticalLetters[k].push(letters[j][k]);
    }
  }
  // console.log(verticalLetters);
  return verticalLetters;
};
const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  //console.log(horizontalJoin);

  for (let element of horizontalJoin) {
    if (element.includes(word)) {
      return true;
    }
  }
  for (let element of verticalJoin) {
    if (element.includes(word)) {
      //console.log(element);
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;