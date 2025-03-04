// https://leetcode.com/problems/reverse-prefix-of-word/description/
var reversePrefix = function(word, ch) {
  const toReverse = []
  const noReverse = []
  for (let i=0; i<word.length; i++) {
    if (!toReverse.includes(ch)) {
      toReverse.push(word[i])
    } else {
      noReverse.push(word[i])
    }
  }
  if (!toReverse.includes(ch)) {
    return toReverse.toString().replaceAll(',', '')
  } else {
    let str = ''
    toReverse.forEach((text) => {
      str = text + str
    })
    noReverse.forEach((text) => {
      str += text
    })
    return str
  }
};
// reversePrefix('aassddabcver', 'b')

module.exports = {
  reversePrefix
};
