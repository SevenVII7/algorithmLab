function longestNiceSubstring(s) {
  if (s.length < 2) {
    return "";
  }
  // 檢查字串中每個字母的大寫和小寫是否都存在
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!s.includes(char.toLowerCase()) || !s.includes(char.toUpperCase())) {
      // 如果當前字母的大寫或小寫不存在，分成兩半遞迴處理
      console.log('cut:', char);

      let left = longestNiceSubstring(s.substring(0, i));
      let right = longestNiceSubstring(s.substring(i + 1));

      // 返回較長的漂亮子字串，如果長度相同，返回最早出現的
      console.log('left: ', left, 'right: ', right);

      return left.length >= right.length ? left : right;
    }
  }
  // 如果所有字母都滿足條件，返回整個字串
  return s;
}
console.log(longestNiceSubstring('addggogGhGAaAa'))
